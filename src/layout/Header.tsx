import React, { PureComponent } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CurrencySwitch from "../components/CurrencySwitch";
import MiniCart from "./MiniCart";

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  .main {
    max-width: 1440px;
    padding: 0 101px;
    // overflow: hidden;
    margin: 0 auto;
  }
  .header {
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    padding-top: 24px;
    justify-content: space-between;
  }
  .categories {
    display: flex;
    gap: 32px;
    margin: 0;
    padding-inline: 1rem;
    list-style: none;
    li {
      a {
        font-weight: 400;
        text-align: center;
        font-size: 1rem;
        line-height: 19.2px;
        color: #1D1F22;
        text-decoration: none;
        span {
          --width: 0%;
          position: relative;
          display: inline-block;
          height: 54px;
          &::before {
            content: "";
            position: absolute;
            top: 100%;
            width: var(--width);
            border-bottom: 2px solid #5ECE7B;
            transition: width 0.12s ease-in-out;
          }
        }
        &.active {
          font-weight: 600;
          color: #5ECE7B;
          span {
            --width: 100%;
          }
        }
      }
    }
  }
  .logo {
    position: absolute;
    top: calc(50% - 15px);
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 41px;
    height: 41px;
    transform: translate(-50%, -50%);
    img {
      width: 31.18px;
      height: 28.62px;
      object-fit: contain;
    }
  }
  .overview {
    display: flex;
    .currency {
      margin-right: 22px;
    }
  }
`;

const categoryList = ["clothes", "tech"];

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <div className="main">
          <div aria-label="header" className="header">
            <ul className="categories" aria-label="categories">
              {categoryList.map((category) => (
                <li key={category}>
                  <NavLink to={`/${category}`}>
                    <span>
                      {category.toUpperCase()}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="logo">
              <img src="/images/a-logo.svg" alt="store-logo" />
            </div>
            <div className="overview">
              <CurrencySwitch />
              <MiniCart />
            </div>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;