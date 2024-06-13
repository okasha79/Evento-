import './style/BabyList.css';
import { BabyData } from "../../Core/Data/BabyData";
import BabyCard from "./Components/BabyCard";
import React, { useEffect, useState } from 'react';
import {addItemToBasket} from '../../API/ItemAPI';
import { BACKEND_DOMAIN, getImgUrl } from '../../API/config';
import axios from 'axios';
import { getAuthUser } from '../../Core/Helper/storage';
import { useNavigate } from 'react-router-dom';

const BabyList = () => {
    const navigate = useNavigate()
    const BabyShower = BabyData;
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
                .get(`${BACKEND_DOMAIN}/api/items?category=decoration&search=baby`)
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
        <div className="BabyList">
            {
                data?.results?.map(item => {
                    return <BabyCard key={item.id}
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

export default BabyList;