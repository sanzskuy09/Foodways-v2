import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, ConfigProvider, Input } from "antd";

import IMAGE from "@/config/image";

const CartOrder = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FFC700",
        },
        components: {
          Button: {
            colorPrimary: "#433434",
            algorithm: true, // Enable algorithm
          },
          Input: {
            colorPrimary: "#433434",
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
      <div className="px-44 py-14">
        <h1 className="font-semibold text-3xl mb-8 text-black">Geprek Bensu</h1>

        {/* Location */}
        <div className="mb-8">
          <h5 className="text-title mx-2 mb-4">Delivery Location</h5>
          <div className="grid grid-cols-4 gap-4 items-center h-10">
            <Input
              // size="large"
              placeholder="Enter location.."
              className="my-2 col-span-3 h-full"
            />
            <Button
              // size="large"
              type="primary"
              className="bg-secondary font-medium col-span-1 h-full text-md"
            >
              Select On Map
            </Button>
          </div>
        </div>

        {/* Review Order */}
        <h5 className="text-title mx-2 mb-2">Review Your Order</h5>
        <div className="grid grid-cols-3 mx-2 gap-8">
          {/* Menu */}
          <div className="col-span-2">
            <hr className="border border-secondary" />

            <div className="flex gap-6 h-24 my-3">
              <div className="h-full bg-violet-500">
                <img
                  src={IMAGE.GEPREK}
                  alt="image-menu"
                  className="h-full w-28 object-cover"
                />
              </div>

              <div className="h-full w-full flex flex-col justify-center gap-4">
                <div className="flex justify-between">
                  <p>Paket Geprek</p>
                  <p className="text-red-500">Rp 15.000</p>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <button>
                      <img src={IMAGE.MINUS_IAMGE} alt="" />
                    </button>
                    <h1 className="py-1 px-4 rounded-md bg-[#F6E6DA]">1</h1>
                    <button>
                      <img src={IMAGE.PLUS_IAMGE} alt="" />
                    </button>
                  </div>
                  <button>
                    <img src={IMAGE.TRASH_IAMGE} alt="delete-icon" width={24} />
                  </button>
                </div>
              </div>
            </div>

            <hr className="border border-secondary" />
          </div>

          {/* Count Price */}
          <div className="col-span-1">
            <hr className="border border-secondary" />

            <div className="flex flex-col gap-3 h-24 my-3 justify-center">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p className="text-red-500">Rp 35.000</p>
              </div>
              <div className="flex justify-between">
                <p>QTY</p>
                <p>2</p>
              </div>
              <div className="flex justify-between">
                <p>Ongkir</p>
                <p className="text-red-500">Rp 10.000</p>
              </div>
            </div>

            <hr className="border border-secondary" />

            <div className="flex justify-between mt-4 font-bold text-red-500">
              <p>Total</p>
              <p>Rp 45.000</p>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default CartOrder;
