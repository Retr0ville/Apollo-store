import React, { PureComponent } from "react";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";

const ProductListWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  .main {
    display: flex;
    align-items: center;
    max-width: 1238px;
    margin: 0 auto;
    width: 100%;
  `;

  // stub product list
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Product 2",
      price: "$200",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Product 3",
      price: "$300",
      image: "https://via.placeholder.com/150"
    }
  ];

class ProductList extends PureComponent {
  render() {
    return (
      <ProductListWrapper>
        <div className="main">
          <h3>Category Name</h3>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </ProductListWrapper>
    );
  }
}

export default ProductList;