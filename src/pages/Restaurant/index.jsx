import React from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addRestaurant } from "@/redux/action/restaurant";

import { Button, ConfigProvider } from "antd";

const Restaurant = () => {
  const { id } = useParams();
  const dataRestaurant = useSelector((state) => state.restaurant);

  return (
    <div className="px-44 py-14">
      <h1 className="font-semibold text-3xl mb-8 text-black">
        Geprek bensu, Menus
      </h1>

      {/* menu rows */}
      <div className="grid grid-cols-4 gap-6">
        {dataRestaurant?.restaurant?.map((e, i) => (
          <div
            className="col-span-1 bg-white flex flex-col gap-3 p-3 rounded-lg h-full"
            key={e.name}
          >
            <img src={e.img} alt="img-1" className="w-full h-44 object-cover" />
            <div className="flex flex-col justify-between h-full">
              <div className="mx-2 mb-2">
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
