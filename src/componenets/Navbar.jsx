import React from "react";
import logo from "../assets/k-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Link to="/" aria-label="Home">
          <img src={logo} alt="logo" width={50} height={50} className="mx-2" />
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-xl lg:gap-12">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
