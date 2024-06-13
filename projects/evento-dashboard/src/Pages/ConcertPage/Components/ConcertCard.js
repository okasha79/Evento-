import React from "react";
import "../style.css/ConcertCard.css";

const ConcertCard = (props) => {
  const Add = () => {
    props.watch();
  };
  return (
    <div className="ConcertCard">
      <div className="ConcertCard-Image">
        <img src={props.image} alt="Services" />
      </div>
      <div className="ConcertCard-Info">
        <div className="ConcertCard-Name">
          <h2>{props.name}</h2>
        </div>
        <div className="ConcertCard-Desc">{props.description}</div>
        <div className="ConcertCard-price">{props.price}</div>

        <button
          onClick={() => {
            props.watch(props.id);
          }}
          class="button-8"
          role="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ConcertCard;
