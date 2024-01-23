import React, { useContext } from "react";
import Navbar from "../../layout/Navbar";
import "./index.scss";
import { BasketContext } from "../../Context/basketContext";
import Footer from "../../layout/Footer";
import { Helmet } from "react-helmet-async";

const Basket = () => {
  const { basket, addCount, deleteCount, deleteFromBasket } =
    useContext(BasketContext);

  const subtotal = basket.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      ;
      <Navbar />
      <div className="basket">
        {basket &&
          basket.map((item) => {
            const total = item.price * item.count;
            return (
              <ul key={item._id}>
                <li>
                  <img src={item.image} alt="" />
                </li>
                <li>{item.title}</li>
                <li>${item.price}</li>
                <li>{item.count}</li>
                <li>Total:{total}</li>
                <li>
                  <button onClick={() => addCount(item)}>+</button>{" "}
                  <button onClick={() => deleteCount(item)}>-</button>
                </li>
                <li onClick={() => deleteFromBasket(item)}>
                  <i class="fa-solid fa-trash"></i>
                </li>
              </ul>
            );
          })}
        <h3>SubTotal:{subtotal}</h3>
      </div>
    </>
  );
};

export default Basket;
