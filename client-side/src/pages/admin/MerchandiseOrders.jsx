import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../App.css";
import under from "../../assets/images/under.jfif";

function MerchandiseOrders() {
  return (
    <div className="text-center ">
      <h1 className="text-center mt-5">Orders</h1>
      <img className="h-50 w-50" src={under} alt="Under" />
    </div>
  );
}

export default MerchandiseOrders;
