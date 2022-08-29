import React, { PureComponent } from "react";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";

const ProductListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  background-color: #fff;
  .test {

  }
  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1238px;
    // margin: 0 101px;
    width: 100%;
    overflow: hidden;
    @media screen and (max-width: 1366px) {
      max-width: 1440px;
      // margin: 0 30px;
    }
    h3 {
      font-size: 42px;
      font-weight: 400;
      line-height: 67.2px;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    .products-list {
      --per-row: 3;
      display: grid;
      justify-content: start;
      width: 100%;
      grid-template-columns: repeat(var(--per-row), auto);
      grid-gap: 32px;
      margin: 0;
      margin-top: 103px;
      padding: 0;
      @media screen and (max-width: 1250px) {
        --per-row: 2;
      }
      @media screen and (max-width: 856px) {
        --per-row: 1;
      }
    }
  }
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
    },
    {
      id: 4,
      name: "Product 4",
      price: "$400",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Product 5",
      price: "$500",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Product 6",
      price: "$600",
      image: "https://via.placeholder.com/150"
    },
  ];

class ProductList extends PureComponent {
  render() {
    return (
      <ProductListWrapper>
        <div className="main">
          <div className="test">
            <h3>Category Name</h3>
            <div className="products-list">
              {products.map(product => (
              <ProductItem key={product.id} product={product}/>
            ))}
            </div>
          </div>
          
        </div>
      </ProductListWrapper>
    );
  }
}

export default ProductList;