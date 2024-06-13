import React from "react";
import "./Style/HomeList.css";
import { HomeData } from "../../Core/Data/HomeData";
import HomeCards from "./Components/Homecards";

const HomeList = () => {
  const Pages = HomeData;
  const viewWork = (id) => {
    console.log("cliked Add from id =", id);
  };
  return (
    <div className="Homesection">
      <h1 className="Homesectionquote">What we offer?</h1>
      <div className="HomeList">
        {Pages.map((item) => {
          return (
            <HomeCards
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              page={item.page}
              path={item.path}
              view={viewWork}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeList;
