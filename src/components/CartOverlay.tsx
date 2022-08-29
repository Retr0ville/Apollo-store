import React, { PureComponent } from "react";
import styled from "styled-components";

const CartOverlayWrapper = styled.div`
  position: absolute;
  right: -29px;
  top: 50px;
  width: 325px;
  max-height: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-inline: 1rem;
  background-color: #fff;
  transition: all .1s ease-out;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
    border: .2px solid #999a; 
  }
  ::-webkit-scrollbar-thumb {
    background-color: #222;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .my-bag {
    position: sticky;
    padding-top: 2rem;
    padding-bottom: 1rem;
    top: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 25.6px;
    background-color: #fff;
    z-index: 1000;
    span {
      font-weight: 500;
    }
  }
  .cart-items {
    padding-top: 1rem;
  }
  .cart-item {
    position: relative;
    display: flex;
    align-items: center;
    // outline: 1px solid #e6e6e6;
    width: 293px;
    overflow: hidden;
    margin-bottom: 40px;
    .cart-details {
      width: 136px;
      .name {
        font-size: 1rem;
        font-weight: 300;
        line-height: 25.6px;
        display: flex;
        align-items: center;
        margin-bottom: 4px;
      }
      .price {
        font-size: 1rem;
        font-weight: 600;
        line-height: 25.6px;
        margin-bottom: 8px;
      }
      .size {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        margin-bottom: 8px;
      }
      .sizes {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-bottom: 0.5rem;
        .active {
          background-color: #1d1f22;
          p {
            color: #fff;
          }
        }
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 22.4px;
          text-align: center;
          border: 1px solid #1d1f22;
          width: 24px;
          height: 24px;
        }
      }
    }
    .color {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      margin-bottom: 10px;
    }
    .colors {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: 20px;
      .active {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border: 1px solid #5ece7b;
        box-sizing: border-box;
      }
      p {
        width: 16px;
        height: 16px;
        background-color: var(--swatch-color);
      }
    }
    .cart-details {
      display: flex;
      flex-direction: column;
      margin-right: 4px;
      width: 136px;
    }
    .cart-qty {
      display: flex;
      flex-direction: column;
      // outline: 1px solid #e6e6e6;
      width: 24px;
      margin-right: 8px;
      align-items: center;
      .add, .minus, .qty {
        display: flex;
        align-items: center;
        justify-content: center;
        span, p {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .qty {
        // margin-block: 100%;
        font-size: 1rem;
        font-weight: 600;
        line-height: 25.6px;
        width: 24px;
        height: 24px;
        // border: 1px solid #1d1f22;
      }
      .add, .minus {
        position: absolute;
        width: 24px;
        height: 24px;
        border: 1px solid #1d1f22;
      }
      .add {
        left: 140px;
        top: 0;
      }
      .minus {
        bottom: 0;
        left: 140px;
      }
    }
    .cart-img {
      width: 121px;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
  .action, .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .total {
    font-family: 'Segoe UI', 'Roboto', 'Oxygen';
    font-weight: 500;
    font-size: 1rem;
    line-height: 18px;
    .cost {
      font-family: Raleway;
      font-weight: 700;
      font-size: 1rem;
      line-height: 25.6px;
    }
  }
  .action {
    margin-top: 2rem;
    .view-bag, .checkout {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 16.8px;
      width: 140px;
      height: 43px;
    }
    .view-bag {
      padding: 1rem 2rem;
      border: 1px solid #1D1F22;
      background-color: #fff;
    }
    .checkout {
      color: #fff;
      border: none;
      background-color: #5ece7b;
    }
  }
`;
const stubCrt = {
  items: {
    "Apollo wayfarer": [
      {
        name: "Apollo wayfarer",
        id: "random-id-1",
        price: 1999,
        quantity: 1,
        image: "/images/products/apollo-wayfarer.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#f5f5f5", "#ff5", "#f5e"],
        selectedColor: "#f5f5f5",
        selectedSize: "S",
      },
      {
        name: "Apollo wayfarer",
        id: "random-id-2",
        price: 1559,
        quantity: 2,
        image: "/images/products/apollo-wayfarer.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#f5f5f5", "#ff5", "#f5e"],
        selectedColor: "#f5f5f5",
        selectedSize: "M",
      },
    ],
    "Neo Fender": [
      {
        name: "Neo Fender",
        id: "random-id-3",
        price: 1999,
        quantity: 1,
        image: "/images/products/neo-fender.jpg",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#f5f5f5", "#ff5", "#f5e"],
        selectedColor: "#ff5",
        selectedSize: "M",
      },
    ],
  },
  count: () => {
    let qty = 0;
    const cart = stubCrt.items || {};
    Object.values(cart).forEach(key => {
      key.forEach(item => {
        qty += item.quantity
      })
    })
    return qty;
  },
  total: () => {
    let curr = 0;
    const cart = stubCrt.items || {};
    Object.values(cart).forEach(key => {
      key.forEach(item => {
        curr += item.quantity * item.price;
      })
    })
    return curr;
  },
};
class CartOverlay extends PureComponent {
  render() {
    return (
      <CartOverlayWrapper className="cart-wrapper">
        <div className="my-bag">
          <p>My Bag, <span>{stubCrt.count()} items</span></p>
        </div>
        <div className="cart-items">
          {Object.keys(stubCrt.items).map((uniqItem) => {
            return (
              stubCrt.items[uniqItem as keyof typeof stubCrt.items].map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    {/* {item.name} {item.quantity} x {item.price} */}
                    <div className="cart-details">
                      <p className="name">
                        {item.name}
                      </p>
                      <p className="price">
                        {item.price}
                      </p>
                      <div>
                        <p className="size">Size:</p>
                        <div className="sizes">
                          {item.sizes.map((size) => {
                            return (
                              <div className={size === item.selectedSize ? "active" : ""} key={size}>
                                <p>
                                  {size}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                        <div>
                          <p className="color">Color:</p>
                          <div className="colors">
                            {item.colors.map((color) => {
                              return (
                                <div className={color === item.selectedColor ? "active" : ""} key={color}>
                                  <p style={{ backgroundColor: color}}/>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-qty">
                      <div className="add">
                          <span>
                            +
                          </span>
                      </div>
                      <div className="qty">
                        <p>
                          {item.quantity}
                        </p>
                      </div>
                      <div className="minus">
                          <span>
                            -
                          </span>
                      </div>
                    </div>
                    <div className="cart-img">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                );
              })
            )}
          )}
        </div>
        <div>
          <div className="total">
            <span>Total</span>
            <span className="cost">{stubCrt.total()}</span>
          </div>
          <div className="action">
            <button className="view-bag">
              View bag
            </button>
            <button className="checkout">
              CHECK OUT
            </button>
          </div>
        </div>
      </CartOverlayWrapper>
    );
  }
}

export default CartOverlay;