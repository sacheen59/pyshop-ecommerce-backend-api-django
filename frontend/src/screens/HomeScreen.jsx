import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product.jsx";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productAction.js";
import { Loader } from "../components/Loader.jsx";
import Message from "../components/Message.jsx";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { error, loading, products } = productList;

  // const allProducts = useSelector(state=> state.product.products);

  //fetching the product from our backend
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
