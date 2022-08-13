import React, { PureComponent } from "react";
import styled from "styled-components";

const CurrencyWrapper = styled.div`
  position: relative;
  .selected {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .symbol {
    position: relative;
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
    padding-block: 15px;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    width: 114px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    list-style: none;
    overflow-y: auto;
    li {
      display: flex;
      align-items: center;
      height: 45px;
      margin:"0px";
      padding:"0px";
      padding-left: 20px;
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
            {selectedCurrency.symbol}
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
      </CurrencyWrapper>
    );
  }
}

export default CurrencySwitch;
