import React, { PureComponent } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CurrencySwitch from "../components/CurrencySwitch";
import MiniCart from "./MiniCart";

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  .main {
    // max-width: 1440px;
    // outline: 1px solid red;
    padding: 0 101px;
    // overflow: hidden;
    @media screen and (max-width: 1360px) {
      padding: 0 1rem;
    }
  }
  .header {
    position: relative;
    // outline: 1px solid crimson;
    max-width: 1238px;
    width: 100%;
    height: 80px;
    display: flex;
    padding-top: 24px;
    margin: 0 auto;
    justify-content: space-between;
    @media screen and (max-width: 1250px) {
      max-width: 804px;
    }
    @media screen and (max-width: 856px) {
      max-width: 600px;
    }
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
            opacity: 1;
            width: var(--width);
            border-bottom: 2px solid #5ECE7B;
            transition: all 0.1s ease-in-out;
          }
        }
        :hover {
          color: #5ECE7B;
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
    top: calc(50% - 7.5px);
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

const categoryList = ["all", "clothes", "tech"];

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