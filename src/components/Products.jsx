import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "./product.module.css";
import { Link } from "react-router-dom";

export const Products = () => {
  const [product, setProduct] = useState([]);
  let offset = 0;
  let cart = localStorage.getItem("cart") || [];

  const getProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products?limit=10&offset=${offset}`)
      .then(({ data }) => {
        console.log(data);
        const newProduct = [];
        setTimeout(() => {
          data.forEach((p) => newProduct.push(p));
          setProduct((products) => [...products, ...newProduct]);
        },500);
      });
    offset += 10;
  };
  useEffect(() => {
    getProduct();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      getProduct();
    }
  };

  const handleAddToCart = (item) => {
    cart.push(item);
    localStorage.setItem("carts", JSON.stringify(cart));
    console.log(item.id);
  };
  return (
    <div className={Style.container}>
      <div className={Style.navbar}>
        <h1>Fresh Stock</h1>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </div>
      <div>
        {product.map((el) => {
          return (
            <div className={Style.parent} key={el.id}>
              <div>
                <img src={el.image} alt="" />
              </div>
              <div>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <p>Cost: {el.price}</p>
              </div>
              <div>
                <button onClick={() => handleAddToCart(el)}>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
