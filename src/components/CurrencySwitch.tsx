import React, { PureComponent } from "react";
import styled from "styled-components";

const CurrencyWrapper = styled.div`
  .selected {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .symbol {
    position: relative;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    top: -1.5px;
    color: #1D1F22;
    margin-right: 10px;
  }
`;

const currencyList = [{ name: "USD", symbol: "$" }, { name: "EUR", symbol: "€" }, { name: "JPY", symbol: "¥" }];
const selectedCurrency = currencyList[0];

class CurrencySwitch extends PureComponent {
  render() {
    return (
      <CurrencyWrapper aria-label="currency switcher" className="currency">
        <div role="button" aria-label="selected" className="selected">
          <span className="symbol">
            {selectedCurrency.symbol}
          </span>
          <svg width="9" height="5" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          {/* // divitis */}
        </div>
      </CurrencyWrapper>
    );
  }
}

export default CurrencySwitch;













