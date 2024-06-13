import React from "react";
import OurStory from "./Components/OurStory";
import QuotePhoto from "./Components/QuotePhoto";
import HomeList from "./HomeList";
import Bestseller from "./Components/Bestseller";

const Home = () => {
  return (
    <>
      <QuotePhoto />
      <HomeList />
      <Bestseller />
      <OurStory />
    </>
  );
};
export default Home;
