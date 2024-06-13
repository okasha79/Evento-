import "./Style/Footer.css";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <>
          <div className="footerContainer">
            <div className="footerNav">
              <ul>
                <li>
                  <Link to={`/`}>home</Link>
                </li>
                <li>
                  <Link to={`/photography`}>photography</Link>
                </li>
                <li>
                  <Link to={`/decoration`}>decoration</Link>
                </li>
                <li>
                  <Link to={`/catering`}>catering</Link>
                </li>
                <li>
                  <Link to={`/place`}>places</Link>
                </li>
                <li>
                  <Link to={`mailto:evento.10.6.2024@gmail.com`}>
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footerBottom">
              <p>Copyright ©️2024 All rights reserved</p>
            </div>
          </div>
          <div className="socialIcons">
            <a href="">
              <SocialIcon url="www.facebook.com" />
            </a>
            <a href="">
              <SocialIcon url="www.instagram.com" />
            </a>
            <a href="">
              <SocialIcon url="www.twitter.com" />
            </a>
          </div>
        </>
      </footer>
    </div>
  );
};

export default Footer;
