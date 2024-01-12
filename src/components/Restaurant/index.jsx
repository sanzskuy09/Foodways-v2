import React from "react";

import { Link } from "react-router-dom";

import IMAGES from "@/config/image";

const data = [
  {
    id: 1,
    name: "Geprek Bensu",
    img: IMAGES.GEPREK,
    distance: "0.2 KM",
  },
  {
    id: 2,
    name: "Pecel Ayam",
    img: IMAGES.PECEL_AYAM,
    distance: "0.6 KM",
  },
  {
    id: 3,
    name: "Nasi Goreng",
    img: IMAGES.NASI_GORENG,
    distance: "0.7 KM",
  },
  {
    id: 4,
    name: "Kopi Kenangan",
    img: IMAGES.KOPI_KENANGAN,
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
        {data.map((e) => (
          <div
            className="col-span-1 bg-white flex flex-col gap-3 p-3 rounded-lg"
            key={e.name}
          >
            <img src={e.img} alt="img-1" className="w-full h-44 object-cover" />
            <div className="mx-2">
              <Link
                to={`/restaurant/${e.id}`}
                className="font-semibold text-xl mb-1"
              >
                {e.name}
              </Link>
              <p>{e.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
