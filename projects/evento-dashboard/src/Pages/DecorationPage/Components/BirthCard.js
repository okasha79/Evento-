import React from "react";
import "../style/BirthCard.css";

const BirthCard = (props) => {
  // console.log(props);
  const Add = () => {
    props.watch();
  };
  return (
    <div className="BirthCard">
      <div className="BirthCard-Image">
        <img src={props.image} alt="Services" />
      </div>
      <div className="BirthCard-Info">
        <div className="BirthCard-Desc">
          <h2>{props.description}</h2>
        </div>
        <div className="BirthCard-Name">
          <h4 className="BirthPrice">{props.price}</h4>
        </div>
        <button
          onClick={() => {
            props.watch(props.id);
          }}
          class="button-5"
          role="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default BirthCard;
