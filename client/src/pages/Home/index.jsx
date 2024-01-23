import React from "react";
import "./index.scss";
import Navbar from "../../layout/Navbar";
import Header from "../../components/Header";
import NewArrivals from "../../components/NewArrivals";
import Watches from "../../components/Watches";
import Choice from "../../components/Choice";
import Footer from "../../layout/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      ;
      <Navbar />
      <Header />
      <NewArrivals />
      <Watches />
      <Choice />
      <Footer />
    </div>
  );
};

export default Home;
