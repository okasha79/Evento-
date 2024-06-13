import React from "react";
import "../style/CateringCard.css";

const CateringCard = (props) => {
  const Add = () => {
    props.watch();
  };
  return (
    <div className="CateringCard">
      <div className="CateringCard-Image">
        <img src={props.image} alt="Services" />
      </div>
      <div className="CateringCard-Info">
        <div className="CateringCard-Name">
          <h2>{props.name}</h2>
        </div>
        <div className="CateringCard-Desc">{props.description}</div>
        <div className="CateringCard-price">{props.price}</div>

        <button
          onClick={() => {
            props.watch(props.id);
          }}
          class="button-1"
          role="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CateringCard;
