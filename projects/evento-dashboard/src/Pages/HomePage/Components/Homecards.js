import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/HomeCards.css";

const HomeCards = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${props.path}`);
  };

  return (
    <div className="vivo1" id="photos1">
      <section className="hero-section">
        <div className="card-container">
          <div
            className="card"
            key={props.id}
            onClick={handleClick}
            role="button"
          >
            <img className="card-background" src={props.image} alt="image" />
            <div className="content">
              <div className="card-category">{props.description}</div>
              <h3 className="card-heading">{props.name}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;
