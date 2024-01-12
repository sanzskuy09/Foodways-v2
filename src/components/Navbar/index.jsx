import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoImage from "@/assets/icons/logo.svg";
import ShoppingBasketImage from "@/assets/icons/shopping-basket.svg";
import ProfileUserImage from "@/assets/images/profil-user.png";

import ModalLogin from "@/components/Modal/Login";
import ModalRegister from "../Modal/Register";

const Navbar = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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
          <img src={LogoImage} alt="logo" />
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
            <img src={ShoppingBasketImage} alt="Shopping Basket" />
            <img src={ProfileUserImage} alt="Profile User" className="h-12" />
            {/* <button
              className="bg-secondary w-32 h-8 rounded-md text-white font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button> */}
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
