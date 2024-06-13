import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BestsellerData } from "../../../Core/Data/BestsellerData";
import '../Style/Bestseller.css';
import { BACKEND_DOMAIN, getImgUrl } from '../../../API/config';
import axios from 'axios';


const categoryLinks = {
  photography: "/photography",
  catering: "/catering",
  decoration: "/decoration",
  concert: "/concert",
  place: "/place",
  workshop: "/workshop",
}

function getPageLinkFromItemCategory(categoryName) {
  return categoryLinks[categoryName]
}

const Bestseller = () => {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(`${page}`);
  };

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
        .get(`${BACKEND_DOMAIN}/api/items/best-seller`)
        .then((resp) => {
          let res = resp?.data?.data?.items || []
          // add page links to results
          res = res.map(item => {
            return {
              ...item,
              page: getPageLinkFromItemCategory(item.category)
            }
          })
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


  const settings = {
    className: "",
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  return (
    <div className="div_cont">
      <h1 className="BestHeader">Best Seller</h1>

      <section className="slider-container">
        {data?.results?.length && <Slider {...settings} className="slick">
          {data.results.map(item => (
            <div key={item.id}>
              <div className="baby_container">
                <div className="babyheaderAndImageContainer" style={{ flexDirection: "row" }}>
                  <header className="babyshower">
                    <h1>{item.title}</h1>
                    <h2>Price: {item.price}</h2>
                    <p className='baby-paragraph'> {item.description}</p>
                  </header>
                  <img className='babyImage' src={getImgUrl(item.image)} alt="image" onClick={() => handleClick(item.page)} role="button" />
                </div>
              </div>
            </div>
          ))}
        </Slider>}
      </section>
    </div>
  );
};

export default Bestseller;
