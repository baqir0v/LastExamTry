import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../../layout/Footer";
import "./index.scss";
import { Helmet } from "react-helmet-async";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    const res = await fetch(`http://localhost:5500/api/watch/${id}`);
    const jsonData = await res.json();
    setDetail(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="detailpage">
      <Helmet>
        <title>Details</title>
      </Helmet>
      ;
      <Navbar />
      {detail ? (
        <ul className="detail">
          <li>
            <img src={detail.image} alt="" />
          </li>
          <li>{detail.title}</li>
          <li>${detail.price}</li>
        </ul>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default Detail;
