import React from "react";
import Navbar from "./../components/navbar/Navbar";
import ProductList from "../components/product/component/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
};

export default Home;
