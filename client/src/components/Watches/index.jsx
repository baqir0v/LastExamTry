import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { WishlistContext } from "../../Context/wishlistContext";
import { Link } from "react-router-dom";
import { BasketContext } from "../../Context/basketContext";

const Watches = () => {
  const [data, setData] = useState();
  const {addToWishlist} = useContext(WishlistContext)
  const {addToBasket} = useContext(BasketContext)

  const fetchData = async () => {
    const resp = await fetch("http://localhost:5500/api/watch");
    const jsonData = await resp.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="watches">
      <div className="watchesbox">
        {data &&
          data.map((item) => (
            <ul key={item._id}>
              <span onClick={()=>addToWishlist(item)}>
                <i class="fa-regular fa-heart"></i>
              </span>
              <li className="imgdiv">
                <img src={item.image} alt="" />
                <div className="addbasket" onClick={()=>addToBasket(item)}>
                    <p>Add To Cart</p>
                </div>
              </li>
              <li className="title">{item.title}</li>
              <li className="price">$ {item.price}</li>
              <li><Link to={`detail/${item._id}`}>Details</Link></li>
            </ul>
          ))}
      </div>
    </section>
  );
};

export default Watches;
