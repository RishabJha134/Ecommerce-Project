import React from "react";
import Navbar from "../components/navbar/Navbar";
import ProductDetail from "../components/product-list/component/ProductDetail";

const ProductDetailPage = () => {
  return (
    <Navbar>
      <ProductDetail></ProductDetail>
    </Navbar>
  );
};

export default ProductDetailPage;