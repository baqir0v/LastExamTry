import React from "react";
import "./index.scss";

const Choice = () => {
  return (
    <section id="choice">
      <div className="choicetop">
        <div className="card">
          <h2>Watch of Choice</h2>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco <br />{" "}
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br />{" "}
            irure dolor in reprehenderit in voluptate velit esse.
          </p>
          <button>SHOW WATCHES</button>
        </div>
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png"
          alt=""
        />
      </div>
      <div className="choicebottom">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png"
          alt=""
        />
        <div className="card">
          <h2>Watch of Choice</h2>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco <br />{" "}
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br />{" "}
            irure dolor in reprehenderit in voluptate velit esse.
          </p>
          <button>SHOW WATCHES</button>
        </div>
      </div>
    </section>
  );
};

export default Choice;
