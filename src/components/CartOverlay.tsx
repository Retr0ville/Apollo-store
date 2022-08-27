import React, { PureComponent } from "react";
import styled from "styled-components";

const CartOverlayWrapper = styled.div`
  width: 325px;
  max-height: 677px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 1rem;
  background-color: #fff;
  p {
    margin: 0;
    padding: 0;
  }
  .my-bag {
    font-size: 1rem;
    font-weight: 700;
    line-height: 25.6px;
    margin-bottom: 2rem;
    span {
      font-weight: 500;
    }
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
        font-weight: 500;
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
      // width: 45%;
    }
    .cart-qty {
      display: flex;
      flex-direction: column;
      outline: 1px solid #e6e6e6;
      // width: 10%;
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
        font-weight: 500;
        line-height: 25.6px;
        width: 24px;
        height: 24px;
        border: 1px solid #1d1f22;
      }
      .add, .minus {
        position: absolute;
        width: 24px;
        height: 24px;
        border: 1px solid #1d1f22;
      }
      .add {
        left: 136px;
        top: 0;
      }
      .minus {
        bottom: 0;
        left: 136px;
      }
    }
    .cart-img {
      // width: 40%;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
`;
const stubCrt = {
  items: {
    "Apollo wayfarer": [
      {
        name: "Apollo wayfarer",
        id: "random-id-1",
        price: "€1,999",
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
        price: "€1,559",
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
        price: "€1,999",
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
};
class CartOverlay extends PureComponent {
  render() {
    return (
      <CartOverlayWrapper>
        <div className="my-bag">
          <p>My Bag, <span>{stubCrt.count()} items</span></p>
        </div>
        <div>
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
            )
          }
          )}
        </div>
        <div></div>
      </CartOverlayWrapper>
    );
  }
}

export default CartOverlay;