import React from "react";
import BabyList from "./BabyList";
import BirthList from "./BirthList";
import EngagementList from "./EngagementList";
import QuotePhoto from "./Components/QuotePhoto";
import Spacex from "./Components/FirSpace";
import Space from "./Components/SecSpace";
import Spacet from "./Components/TheSpace";
const Decoration = () => {
  return (
    <>
      <QuotePhoto />
      <Spacex />
      <BabyList />
      <Space />
      <BirthList />
      <Spacet />
      <EngagementList />
    </>
  );
};
export default Decoration;
