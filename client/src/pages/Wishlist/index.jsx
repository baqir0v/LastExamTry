import React, { useContext } from "react";
import { WishlistContext } from "../../Context/wishlistContext";
import Navbar from "../../layout/Navbar";
import "./index.scss";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const { wishlist, addToWishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      ;
      <Navbar />
      <div className="wishlist">
        {wishlist &&
          wishlist.map((item) => (
            <ul key={item._id}>
              <li>
                <img src={item.image} alt="" />
              </li>
              <li>{item.title}</li>
              <li>{item.price}</li>
              <li onClick={() => addToWishlist(item)}>
                <i class="fa-solid fa-heart"></i>
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Wishlist;
