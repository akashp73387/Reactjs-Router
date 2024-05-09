import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Navbar</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </nav>
    </>
  );
};

export default Navbar;
