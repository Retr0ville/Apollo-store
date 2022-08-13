import React, { PureComponent } from "react";
import styled from "styled-components";

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

class ProductList extends PureComponent {
  render() {
    return (
      <ProductListWrapper>
        <div className="main">
          <div>ProductList</div>
        </div>
      </ProductListWrapper>
    );
  }
}

export default ProductList;