import React from "react";
import "../style/PlaceCard.css";

const PlaceCard = (props) => {
  const Add = () => {
    props.watch();
  };
  return (
    <div className="PlaceCard">
      <div className="PlaceCard-Image">
        <img src={props.image} alt="Services" />
      </div>
      <div className="PlaceCard-Info">
        <div className="PlaceCard-Name">
          <h2>{props.name}</h2>
        </div>
        <div className="PlaceCard-Desc">{props.description}</div>
        <div className="PlaceCard-price">{props.price}</div>
        <button
          onClick={() => {
            props.watch(props.id);
          }}
          class="button-2"
          role="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
