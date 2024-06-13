import React, { useEffect, useState } from "react";
import './style/BirthList.css';
import { BirthData } from "../../Core/Data/BirthData";
import BirthCard from "./Components/BirthCard";
import {addItemToBasket} from "../../API/ItemAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_DOMAIN, getImgUrl } from "../../API/config";


const BirthList = () => {
    // const Birthday = BirthData;
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
                .get(`${BACKEND_DOMAIN}/api/items?category=decoration&search=birthday`)
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
        <div className="BirthList">
            {
                data?.results?.map(item => {
                    return <BirthCard key={item.id}
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

export default BirthList;