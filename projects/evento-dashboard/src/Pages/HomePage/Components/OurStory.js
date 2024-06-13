import React from "react";
import "../Style/OurStory.css";

import Fade from "react-reveal/Fade";

function OurStory() {
  return (
    <div className="container">
      <div className="headerAndImageContainer">
        <Fade left delay={700}>
          <header
            style={{
              animationName: "fadeInUp",
            }}
          >
            <h1>Our Story</h1>
            <p className="best-paragraph">
              We built this website to bridge the divide between event
              requirements and top-tier talent. Our platform connects those
              seeking high-quality products and services with exceptional
              talent, facilitating seamless event planning and execution.
            </p>
          </header>
        </Fade>
      </div>
    </div>
  );
}

export default OurStory;
