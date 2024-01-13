import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProfileUserImage from "@/assets/images/profil-user.png";

import ICONS from "@/config/icons";
import IMAGES from "@/config/image";

import ModalLogin from "@/components/Modal/Login";
import ModalRegister from "@/components/Modal/Register";

const Navbar = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  function handleLogin() {
    setIsLogin(true);
  }

  function handleLogout() {
    setIsLogin(false);
  }

  const showModalLogin = () => {
    setIsModalLoginOpen((value) => !value);
  };

  const showModalRegister = () => {
    setIsModalRegisterOpen((value) => !value);
  };

  const handleSwitchModal = () => {
    setIsModalLoginOpen((value) => !value);
    setIsModalRegisterOpen((value) => !value);
  };

  return (
    <div className="flex justify-between items-center bg-primary px-16 py-5">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={ICONS.LOGO} alt="logo" />
        </Link>
      </div>

      {/* user */}
      <div className={`flex ${isLogin ? "gap-8" : "gap-4"} items-center`}>
        {!isLogin ? (
          <>
            <button
              className="bg-secondary w-32 h-8 rounded-md text-white font-semibold"
              onClick={showModalRegister}
            >
              Register
            </button>
            <button
              className="bg-secondary w-32 h-8 rounded-md text-white font-semibold"
              onClick={showModalLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <div className="relative">
              <Link to="/restaurant/cart-order">
                <img src={ICONS.SHOPPING_BASKET} alt="Shopping Basket" />
              </Link>
              <div className="absolute top-0 -right-2 px-1 bg-red-500 text-xs text-white rounded-full">
                13
              </div>
            </div>

            {/* dropdown menu profile */}
            <div className="relative group">
              <img src={ProfileUserImage} alt="Profile User" className="h-12" />
              <div className="top-full absolute -right-3 z-10">
                {/* Arrow */}

                <div className="hidden group-hover:block w-52 mt-4 bg-white border border-transparent rounded-md shadow-md">
                  <div className="absolute z-20 top-0 right-7 mt-2 w-4 h-4 border-t-3 border-r-3 border-transparent border-solid bg-white rotate-45"></div>

                  <div className="px-4 py-4 font-semibold">
                    <Link
                      to="/profile"
                      className="flex items-center gap-4 w-full mb-4 hover:opacity-60"
                    >
                      <img src={ICONS.USER} alt="user-icon" width={30} />
                      Profile
                    </Link>
                    <Link
                      to="/product/add-product"
                      className="flex items-center gap-4 w-full hover:opacity-60"
                    >
                      <img
                        src={ICONS.ADD_PRODUCT}
                        alt="add-product-icon"
                        width={30}
                      />
                      Add Product
                    </Link>
                  </div>
                  <hr className="border border-[#A8A8A8]" />
                  <div className=" px-4 py-4 font-semibold">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-4 w-full text-left hover:opacity-60"
                    >
                      <img src={ICONS.LOGOUT} alt="logout-icon" width={30} />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <ModalLogin
        open={isModalLoginOpen}
        setOpen={setIsModalLoginOpen}
        openRegister={handleSwitchModal}
      />
      <ModalRegister
        open={isModalRegisterOpen}
        setOpen={setIsModalRegisterOpen}
        openLogin={handleSwitchModal}
      />
    </div>
  );
};

export default Navbar;
