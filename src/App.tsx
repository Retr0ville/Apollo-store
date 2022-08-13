import React, { PureComponent } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";


class App extends PureComponent {
  render() {
    return (
      <>   
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/details/:itemId" element={<ProductDetail/>} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
