import React from "react";
import "../style/BabyCard.css";

const BabyCard = (props) => {
  // console.log(props);
  const Add = () => {
    props.watch();
  };
  return (
    <div className="BabyCard">
      <div className="BabyCard-Image">
        <img src={props.image} alt="Services" />
      </div>
      <div className="BabyCard-Info">
        <div className="BabyCard-Desc">
          <h2>{props.description}</h2>
        </div>
        <div className="BabyCard-Name">
          <h4 className="BabyPrice">{props.price}</h4>
        </div>
        <button
          onClick={() => {
            props.watch(props.id);
          }}
          class="button-4"
          role="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default BabyCard;
