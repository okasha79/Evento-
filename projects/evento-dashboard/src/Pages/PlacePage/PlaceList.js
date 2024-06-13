import "./style/PlaceList.css";
import PlaceCard from "./Components/PlaceCard";
import { PlaceData } from "../../Core/Data/PlaceData";
import React, { useEffect, useState } from "react";
import {addItemToBasket} from "../../API/ItemAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_DOMAIN, getImgUrl } from "../../API/config";

const PlaceList = () => {
  const Place = PlaceData;
  const navigate = useNavigate()
  const watchNow = async (id) => {
    if (!await addItemToBasket(id)) navigate("/login")
  }
  const [data, setdata] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setdata({ ...data, loading: true });
    if (BACKEND_DOMAIN) {
      axios
        .get(`${BACKEND_DOMAIN}/api/items?category=place`)
        .then((resp) => {
          let res = resp?.data?.data?.items || []
          setdata({ results: res, loading: false, err: null });
        })
        .catch((err) => {
          setdata({
            ...data,
            loading: false,
            err: "Something went wrong, please try again later!",
          });
        });
    }
  }, [data.reload]);


  return (
    <div className="PlaceList">
      {data?.results?.map((item) => {
        return (
          <PlaceCard
            key={item.id}
            id={item.id}
            name={item.title}
            description={item.description}
            price={item.price}
            image={getImgUrl(item.image)}
            watch={watchNow}
          />
        );
      })}
    </div>
  );
};
export default PlaceList;
