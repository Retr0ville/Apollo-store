import React, { PureComponent } from "react";
import styled from "styled-components";

const ProductDetailWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  .main {
    display: flex;
    align-items: center;
    max-width: 1238px;
    width: 100%;
  `;

class ProductDetail extends PureComponent {
  render() {
    return (
      <ProductDetailWrapper>
        <div className="main">
          <div>ProductDetail</div>
        </div>
      </ProductDetailWrapper>
    );
  }
}

export default ProductDetail;