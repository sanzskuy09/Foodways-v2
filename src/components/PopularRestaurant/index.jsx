import React from "react";

import BurgerKing from "@/assets/images/burger-king.png";
import Starbucks from "@/assets/images/starbucks.png";
import KFC from "@/assets/images/kfc.png";
import JCO from "@/assets/images/jco.png";

const restaurant = [
  {
    name: "Burger King",
    img: BurgerKing,
  },
  {
    name: "Starbucks",
    img: Starbucks,
  },
  {
    name: "KFC",
    img: KFC,
  },
  {
    name: "JCO",
    img: JCO,
  },
];

const PopularRestaurant = () => {
  return (
    <section className="px-44 pt-14">
      <h1 className="font-semibold text-3xl mb-8 text-black">
        Popular Restaurant
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {restaurant.map((e) => (
          <div
            className="col-span-1 bg-white flex gap-4 items-center px-8 py-4 rounded-lg"
            key={e.name}
          >
            <img src={e.img} alt="img-1" />
            <h3 className="font-semibold text-xl">{e.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRestaurant;
