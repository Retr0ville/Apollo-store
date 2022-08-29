import React, { PureComponent } from "react";
import styled from "styled-components";

const CurrencyWrapper = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 2;
  .overlay {
    cursor: auto;
    position: absolute;
    top: -40px;
    left: -100vw;
    right: 0;
    bottom: 0;
    width: 200vw;
    height: 100vh;
    opacity: 0;
    z-index: -1;
    display: none;
    &.visible {
      display: block;
    }
  }
  .selected {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .symbol {
    position: relative;
    width: 10px;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    top: -1.5px;
    color: #1D1F22;
    margin-right: 10px;
  }
  .list {
    position: absolute;
    left: -20px;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-top: 7.5px;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    width: 114px;
    max-height: 0px;
    border: none;
    transform: scale(0), translateY(-100px);
    opacity: 0;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
    list-style: none;
    overflow: hidden;
    transition: all 0.15s linear;
    &.open {
      transform: scale(1);
      opacity: 1;
      max-height: 300px;
      padding-block: 15px;
    }
    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 45px;
      margin:"0px";
      padding:"0px";
      padding-left: 20px;
      .symbol {
        width: unset;
        top: 0px;
        align-items: center;
        margin-right: 7px;
      }
      :hover {
      background-color: #eeeeee;
      }
    }
  }
`;

const currencyList = [{ name: "USD", symbol: "$" }, { name: "EUR", symbol: "€" }, { name: "JPY", symbol: "¥" }];
const selectedCurrency = currencyList[0];
class CurrencySwitch extends PureComponent {
  state = {
    selectedCurrency: selectedCurrency,
    isOpen: false,
  };
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  handleSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const selectedCurrency = currencyList.find(currency => currency.name === e.currentTarget.dataset.name);
    this.setState({
      selectedCurrency: selectedCurrency,
      isOpen: false,
    });
  }

  render() {
    return (
      <CurrencyWrapper aria-label="currency switcher" className="currency">
        <div role="button" aria-label={`${this.state.isOpen ? "dropdown-open" : "dropdown-closed"}`} onClick={this.toggleOpen} className="selected">
          <span aria-label="selected" className="symbol">
            {this.state.selectedCurrency.symbol}
          </span>
          <svg width="9" height="5" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <ul className={`list ${this.state.isOpen ? "open" : "closed"}`}>
          {
            currencyList.map(currency => (
              <li key={currency.name} className="list-item" data-name={currency.name} onClick={this.handleSelect}>
                <span className="symbol">
                  {currency.symbol}
                </span>
                {currency.name}
              </li>
            ))
          }
        </ul>
        <div className={`overlay ${this.state.isOpen ? "visible" : "none"}`} onClick={this.toggleOpen} />
      </CurrencyWrapper>
    );
  }
}

export default CurrencySwitch;
