import React, { PureComponent } from "react";
import styled from "styled-components";

const CartOverlayWrapper = styled.div`
  width: 325px;
  max-height: 677px;
  overflow-y: auto;
  padding: 2rem 1rem;
  background-color: #fff;
  .cart-item {
    display: flex;
    align-items: center;
    // height: 40%;
    .sizes {
      display: flex;
      align-items: center;
    }
    .colors {
      display: flex;
      align-items: center;
    }
    .cart-details {
      display: flex;
      flex-direction: column;
      width: 45%;
    }
    .cart-qty {
      display: flex;
      flex-direction: column;
      width: 15%;
      justify-content: space-between;
      align-items: center;
    }
    .cart-img {
      width: 40%;
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
        <div>
          <p>My Bag, {stubCrt.count()} items</p>
        </div>
        <div>
          {Object.keys(stubCrt.items).map((uniqItem) => {
            return (
              stubCrt.items[uniqItem as keyof typeof stubCrt.items].map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    {/* {item.name} {item.quantity} x {item.price} */}
                    <div className="cart-details">
                      <p>
                        {item.name}
                      </p>
                      <p>
                        {item.price}
                      </p>
                      <div>
                        <p>Size:</p>
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
                          <p>Color:</p>
                          <div className="colors">
                            {item.colors.map((color) => {
                              return (
                                <div className={color === item.selectedColor ? "active" : ""} key={color}>
                                  <p>
                                    {color}
                                  </p>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-qty">
                      <div>
                        <div>
                          <span>
                            +
                          </span>
                        </div>
                      </div>
                      <div>
                        <p>
                          {item.quantity}
                        </p>
                      </div>
                      <div>
                        <div>
                          <span>
                            -
                          </span>
                        </div>
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