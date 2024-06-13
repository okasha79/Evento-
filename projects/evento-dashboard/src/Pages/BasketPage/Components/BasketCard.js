import React from "react";
import "../style/BasketCard.css";

const BasketCard = (props) => {

  return (
    <div className="BasketCard">
      <div className="BasketCard-Image">
        <img src={props.image} alt="Services" />
      </div>
      <div className="BasketCard-Info">
        <div className="BasketCard-Name">
          <h2>{props.name}</h2>
        </div>
        <div className="BasketCard-Desc">{props.description}</div>
        <div className="BasketCard-price">{props.price}</div>
        <button
          onClick={() => {
            props.watch(props.id);
          }}
          class="button-7"
          role="Button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
