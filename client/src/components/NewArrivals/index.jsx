import React from "react";
import "./index.scss";

const NewArrivals = () => {
  return (
    <section id="newarrivals">
      <div className="arrivebox">
        <div className="card">
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
              alt=""
            />
          </div>
          <h3>Thermo Ball Etip Gloves</h3>
          <p>$ 45,743</p>
        </div>
        <div className="card">
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png"
              alt=""
            />
          </div>
          <h3>Thermo Ball Etip Gloves</h3>
          <p>$ 45,743</p>
        </div>
        <div className="card">
          <div className="img">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png"
              alt=""
            />
          </div>
          <h3>Thermo Ball Etip Gloves</h3>
          <p>$ 45,743</p>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
