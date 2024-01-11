import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Routes from "./router";

import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

export default function AppLayout() {
  // const [user, setUser] = useState();
  // const navigate = useNavigate();

  return (
    <>
      <ToastContainer position="top-center" />

      <Navbar />

      <Routes />
      {/* <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/login" style={{ padding: 5 }}>
          Login
        </Link>
        {user && (
          <Link to="/stats" style={{ padding: 5 }}>
            Stats
          </Link>
        )}
      </nav> */}
    </>
  );
}
