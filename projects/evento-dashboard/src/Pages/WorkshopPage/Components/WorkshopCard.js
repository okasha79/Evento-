import React from "react";
import "../Style.css/WorkshopCard.css";

const WorkshopCard = (props) => {
  const Add = () => {
    props.watch();
  };
  return (
    <div className="WorkshopCard">
      <div className="WorkshopCard-Image">
        <img src={props.image} alt="Services" />
      </div>
      <div className="WorkshopCard-Info">
        <div className="WorkshopCard-Name">
          <h2>{props.name}</h2>
        </div>
        <div className="WorkshopCard-Desc">{props.description}</div>
        <div className="WorkshopCard-price">{props.price}</div>

        <button
          onClick={() => {
            props.watch(props.id);
          }}
          class="button-12"
          role="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;
