import React from "react";
import Jumbotron from "../../components/Jumbotron";
import PopularRestaurant from "../../components/PopularRestaurant";
import Restaurant from "../../components/Restaurant";

const Homepage = () => {
  return (
    <div>
      {/* Section Hero / Jumbotron */}
      <Jumbotron />

      {/* Section Popular Restaurant */}
      <PopularRestaurant />

      {/* Section Restaurant */}
      <Restaurant />
    </div>
  );
};

export default Homepage;
