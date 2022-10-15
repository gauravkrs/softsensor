import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./product.module.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("carts")) || [];

  return (
    <div>
      <Link to="/">
        <button className={Style.homebtn}>Back To Home</button>
      </Link>

      <div>
        {cart.map((el) => {
          return (
            <div style={{ top: "20px" }} className={Style.parent} key={el.id}>
              <div>
                <img src={el.image} alt="" />
              </div>
              <div>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <p>Cost: {el.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
