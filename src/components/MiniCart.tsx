import React, { PureComponent } from "react";
import styled from "styled-components";
import CartOverlay from "./CartOverlay";

const MiniCartWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  // align-items: center;
  justify-content: center;
  top: 3px;
`;

class MiniCart extends PureComponent {
  render() {
    return (
      <MiniCartWrapper aria-label="cart manager" className="cart">
        <div role="button" aria-label="cart-icon button" className="cart-icon">
          <img src="/images/empty-cart.svg" alt="cart" />
        </div>
        <div>
          <CartOverlay />
        </div>
      </MiniCartWrapper>
    );
  }
}

export default MiniCart;
