import React from "react";

import Geprek from "../../assets/images/geprek.png";
import PecelAyam from "../../assets/images/pecel-ayam.png";
import NasiGoreng from "../../assets/images/nasi-goreng.png";
import KopiKenangan from "../../assets/images/kopi-kenangan.png";

const restaurant = [
  {
    name: "Geprek Bensu",
    img: Geprek,
    distance: "0.2 KM",
  },
  {
    name: "Pecel Ayam",
    img: PecelAyam,
    distance: "0.6 KM",
  },
  {
    name: "Nasi Goreng",
    img: NasiGoreng,
    distance: "0.7 KM",
  },
  {
    name: "Kopi Kenangan",
    img: KopiKenangan,
    distance: "1.2 KM",
  },
];

const Restaurant = () => {
  return (
    <section className="px-44 py-14" id="restaurant">
      <h1 className="font-semibold text-3xl mb-8 text-black">
        Restaurant Near You
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {restaurant.map((e) => (
          <div
            className="col-span-1 bg-white flex flex-col gap-3 p-3 rounded-lg"
            key={e.name}
          >
            <img src={e.img} alt="img-1" className="w-full h-44 object-cover" />
            <div className="mx-2">
              <a href="#restaurant" className="font-semibold text-xl mb-1">
                {e.name}
              </a>
              <p>{e.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
