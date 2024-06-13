import React from "react";
import "../style/EngagementCard.css";

const EngagementCard = (props) => {
  // console.log(props);
  const Add = () => {
    props.watch();
  };
  return (
    <div className="EngagementCard">
      <div className="EngagementCard-Image">
        <img src={props.image} alt="Services" />
      </div>
      <div className="EngagementCard-Info">
        <div className="EngagementCard-Desc">
          <h2>{props.description}</h2>
        </div>
        <div className="EngagementCard-Name">
          <h4 className="EngagementPrice">{props.price}</h4>
        </div>
        <button
          onClick={() => {
            props.watch(props.id);
          }}
          class="button-6"
          role="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default EngagementCard;
