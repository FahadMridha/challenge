import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../component/shared/footer/Footer";
import Navbar from "../component/shared/navbar/NavBar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
