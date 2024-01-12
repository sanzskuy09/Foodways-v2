import React from "react";
import { useParams } from "react-router-dom";

import IMAGES from "@/config/image";
import { Button, ConfigProvider } from "antd";

const data = [
  {
    id: 1,
    name: "Paket Geprek",
    img: IMAGES.GEPREK,
    price: 15000,
  },
  {
    id: 2,
    name: "Paket Geprek Keju",
    img: IMAGES.GEPREK_KEJU,
    price: 20000,
  },
  {
    id: 3,
    name: "Paket Geprek Leleh",
    img: IMAGES.GEPREK_LELEH,
    price: 25000,
  },
  {
    id: 4,
    name: "Paket Sambal Matah",
    img: IMAGES.PAKET_SAMBAL_MATAH,
    price: 15000,
  },
  {
    id: 5,
    name: "Mie Ayam Geprek",
    img: IMAGES.MIE_AYAM_GEPREK,
    price: 17000,
  },
  {
    id: 6,
    name: "Mie Ayam Geprek keju",
    img: IMAGES.MIE_AYAM_KEJU,
    price: 22000,
  },
  {
    id: 7,
    name: "Mie Ayam Geprek Leleh",
    img: IMAGES.MIE_AYAM_LELEH,
    price: 27000,
  },
  {
    id: 8,
    name: "Mie Ayam Sambel Telur Asin",
    img: IMAGES.MIE_AYAM_TELUR_ASIN,
    price: 22000,
  },
];

const Restaurant = () => {
  const { id } = useParams();
  return (
    <div className="px-44 py-14">
      <h1 className="font-semibold text-3xl mb-8 text-black">
        Geprek bensu, Menus
      </h1>

      {/* menu rows */}
      <div className="grid grid-cols-4 gap-6">
        {data.map((e, i) => (
          <div
            className="col-span-1 bg-white flex flex-col gap-3 p-3 rounded-lg h-full"
            key={e.name}
          >
            <img src={e.img} alt="img-1" className="w-full h-44 object-cover" />
            <div className="flex flex-col justify-between h-full">
              <div className="mx-2">
                <p className="font-semibold text-xl mb-1">{e.name}</p>
                <p>Rp {e.price.toLocaleString()}</p>
              </div>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#FFC700",
                    colorText: "rgba(133, 111, 23, 0.88)",
                  },
                  components: {
                    Button: {
                      colorPrimary: "#FFC700",
                      colorTextLightSolid: "#000",
                      algorithm: true, // Enable algorithm
                    },
                  },
                }}
              >
                <Button
                  type="primary"
                  className="bg-primary w-full rounded-md py-1 font-semibold justify-self-end"
                >
                  Order
                </Button>
              </ConfigProvider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
