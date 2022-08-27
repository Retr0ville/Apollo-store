import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 386px;
  height: 444px;
  :hover {
    cursor: pointer;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    .add-cart {
      display: flex !important;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .product-image {
    width: 354px;
    height: 330px;
    position: relative;
    .add-cart {
      position: absolute;
      right: 15px;
      bottom: -26px;
      display: none;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background-color: #5ece7b;
      filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
      img {
        position: relative;
        right: 1px;
        width: 24px;
        height: 24px;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product-info {
    margin-top: 24px;
    line-height: 28.8px;
    font-size: 18px;
    font-weight: 300;
    .product-price {
      font-weight: 600;
    }
  }
`

type PropTypes = {
  product: {
    id: number,
    name: string,
    price: string,
    image: string
  }
};

class ProductItem extends React.Component<PropTypes> {
  constructor(props: PropTypes) {
      super(props);
  }
  render() {
    return (
      <ItemWrapper>
        <div className="content">
          <div className="product-image">
            <img src={this.props.product.image} alt={this.props.product.name} />
            <div role="button" aria-label={`add ${this.props.product.name} to cart`} className="add-cart"><img src="/images/add-to-cart.svg" alt="cart" /></div>
          </div>
          <div className="product-info">
            <div className="product-name">{this.props.product.name}</div>
            <div className="product-price">{this.props.product.price}</div>
          </div>
        </div>
      </ItemWrapper>
    );
  }
}

export default ProductItem;