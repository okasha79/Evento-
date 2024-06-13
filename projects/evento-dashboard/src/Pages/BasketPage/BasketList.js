import "./style/BasketList.css";
import { BasketData } from "../../Core/Data/BasketData";
import BasketCard from "./Components/BasketCard";
import React, { useEffect, useState } from "react";
import { addItemToBasket, removeItemFromBasket } from "../../API/ItemAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_DOMAIN, getImgUrl } from "../../API/config";
import { getAuthUser } from "../../Core/Helper/storage";
import BasketForm from "./Components/Payment";

const BasketList = () => {
  // const Basket = BasketData;
  const navigate = useNavigate();
  const auth = getAuthUser();
  const [data, setdata] = useState({
    loading: true,
    results: {},
    err: null,
    reload: 0,
  });

  const watchNow = async (id) => {
    if (!(await removeItemFromBasket(id))) navigate("/login");
    else {
      setdata({ ...data, reload: data?.reload + 1 });
    }
  };

  useEffect(() => {
    setdata({ ...data, loading: true });
    if (BACKEND_DOMAIN) {
      axios
        .get(`${BACKEND_DOMAIN}/api/items/basket`, {
          headers: { authorization: auth.token },
        })
        .then((resp) => {
          let res = resp?.data?.data || [];
          setdata({ results: res, loading: false, err: null });
        })
        .catch((err) => {
          setdata({
            ...data,
            loading: false,
            err: "Something went wrong, please try again later!",
          });
          navigate("/login");
        });
    }
  }, [data.reload]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="BasketList">
        {data?.results?.basket
          ? data?.results?.basket?.map((item) => {
              return (
                <BasketCard
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  name={item.title}
                  description={item.description}
                  image={getImgUrl(item.image)}
                  watch={watchNow}
                />
              );
            })
          : "Empty Basket"}
      </div>

      <BasketForm
        price={data?.results?.totalPrice}
        setBasketdata={setdata}
        basketData={data}
      />
    </div>
  );
};

export default BasketList;
