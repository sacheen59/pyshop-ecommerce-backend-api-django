import React, { useState, useEffect } from "react";
import Product from "../components/Product.jsx";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

export const HomeScreen = () => {
  const [allProducts, setAllProducts] = useState([]);

  //fetching the product from our backend
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/products/`);
      setAllProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {allProducts.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
