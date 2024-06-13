import "./Style/Header.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuthType,
  removeAuthAdmin,
  removeAuthUser,
} from "../Core/Helper/storage";

export default function Header() {
  const navigate = useNavigate();
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [authType, setAuthType] = useState(localStorage.getItem("user_type"));
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  function handleAdminLogout() {
    removeAuthAdmin();
    navigate("/home");
    window.location.reload();
  }
  function handleUserLogout() {
    removeAuthUser();
    navigate("/home");
    window.location.reload();
  }

  return (
    <header className="Header">
      {" "}
      <img
        src={require("../Assets/Images/photo_2024-05-30_19-07-39.jpg")}
        className="Logo"
        alt="logo"
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className={`Nav ${isNavVisible ? "show" : ""}`}>
          {authType === "admin" && (
            <ul className="a">
              <li className="hassubs">
                <Link to={`/admin/manage`}>Manage</Link>
              </li>
              <li className="hassubs">
                <Link to={`/admin/add`}>Add</Link>
              </li>
              <li>
                <button onClick={handleAdminLogout}> Logout </button>
              </li>
            </ul>
          )}
          {authType !== "admin" && (
            <ul className="a">
              <li>
                <Link to={`/home`}>Home</Link>
              </li>
              <li className="hassubs">
                Products
                <ul className="dropdown">
                  <li className="subs">
                    <Link to={`/decoration`}>Decoration</Link>
                  </li>
                </ul>
              </li>
              <li className="hassubs">
                Services
                <ul className="dropdown">
                  <li className="subs">
                    <Link to={`/catering`}>Catering</Link>
                  </li>
                  <li className="subs">
                    <Link to={`/photography`}>Photography</Link>
                  </li>
                  <li className="subs">
                    <Link to={`/workshop`}>Workshop</Link>
                  </li>
                  <li className="subs">
                    <Link to={`/concert`}>Concert</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/place`}>Places</Link>
              </li>
              <li>
                <Link to={`mailto:evento.10.6.2024@gmail.com`}>Contact Us</Link>
              </li>
              {authType === "guest" && (
                <>
                  <li>
                    <Link to={`/login`}>
                      <button> Login </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/admin/login`}>
                      <button> Login as Admin </button>
                    </Link>
                  </li>
                </>
              )}
              {authType === "user" && (
                <>
                  <li>
                    <button onClick={handleUserLogout}> Logout </button>
                  </li>
                  <li>
                    <Link to={`/basket`}>
                      <button className="add-to-cart">
                        <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <i className="gg-menu"></i>
      </button>
    </header>
  );
}
