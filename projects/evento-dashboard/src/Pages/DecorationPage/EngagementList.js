import React, { useEffect, useState } from "react";
import "./style/EngagementList.css";
import EngagementCard from "./Components/EngagementCard";
import { EngagementData } from "../../Core/Data/EngagementData ";
import {addItemToBasket} from "../../API/ItemAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_DOMAIN, getImgUrl } from "../../API/config";

const EngagementList = () => {
  // const Engagement = EngagementData;
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
        .get(`${BACKEND_DOMAIN}/api/items?category=decoration&search=engagement`)
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

    <div className="EngagementList">
      {
        data?.results?.map(item => {
          return <EngagementCard key={item.id}
            id={item.id}
            price={item.price}
            name={item.title}
            description={item.description}
            image={getImgUrl(item.image)}
            watch={watchNow}
          />
        })
      }
    </div>
  );
};

export default EngagementList;
