import React, { PureComponent } from "react";
import styled from "styled-components";

const CartWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  .main {
    display: flex;
    align-items: center;
    max-width: 1238px;
    width: 100%;
  `;

class Cart extends PureComponent {
  render() {
    return (
      <CartWrapper>
        <div className="main">
          <div>Cart</div>
        </div>
      </CartWrapper>
    );
  }
}

export default Cart;