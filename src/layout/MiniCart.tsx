import React, { PureComponent } from "react";
import styled from "styled-components";
import CartOverlay from "../components/CartOverlay";

const MiniCartWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  max-height: 20px;
  display: flex;
  justify-content: center;
  top: 3px;
  // overflow: hidden;
  z-index: 999;
  &.open {
    overflow: visible;
  }
  .overlay, .overlay-trans {
    cursor: auto;
    position: absolute;
    top: 54px;
    left: -100vw;
    right: 0;
    bottom: -100vh;
    width: 200vw;
    height: 200vh;
    opacity: .5;
    background-color: rgba(57, 55, 72, 0.22);
    z-index: -1;
    display: none;
    &.visible {
      display: block;
    }
  }
  .overlay-trans {
    top: -40px;
    opacity: 0;
  }
  .cart-icon {
    cursor: pointer;
  }
  .cart-view {
    
    
    // max-height: 0 !important;
    // height: 0 !important;
    z-index: -1;
    transition: all .1s linear;
    .cart-wrapper {
      opacity: 0;
      transform: translateY(-20px);
    }
    // overflow: hidden;
    // &.none {
    //   div {
    //     visibility: hidden;
    //   }
    // }
    &.open {
      .cart-wrapper {
        transform: translateY(0);
        opacity: 1;
        max-height: calc(100vh - 80px) !important;
      }
     
      z-index: unset;
      height:100%;
      // max-height: 100%;
      // overflow: visible;
    }
  }
`;

class MiniCart extends PureComponent {
  state = {
    isOpen: false
  }
  toggleOpen =()=> {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <MiniCartWrapper aria-label="cart manager" className={`cart ${this.state.isOpen && "open"}`} >
        <div role="button" aria-label="cart-icon button" className="cart-icon" onClick={this.toggleOpen}>
          <img src="/images/empty-cart.svg" alt="cart" />
        </div>
        <div className={`cart-view ${this.state.isOpen ? "open" : "none"}`}>
          <CartOverlay />
        </div>
        <div className={`overlay ${this.state.isOpen ? "visible" : "none"}`} onClick={this.toggleOpen} />
        <div className={`overlay-trans ${this.state.isOpen ? "visible" : "none"}`} onClick={this.toggleOpen} />
      </MiniCartWrapper>
    );
  }
}

export default MiniCart;
