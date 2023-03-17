import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Filters } from "./components/Filters/ordem/Filter";
import { Cart } from "./components/ShoppingCart/Cart/Cart";
import { FooterPage } from "./components/footer/Footer";
import { Home } from "./components/ProductList/Home/Home";
import { ProductList } from "./assets/productsList";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

const Container = styled.div`
  height: 80rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  const [amount, setAmount] = useState("");
  const [cart, setCart] = useState([]);
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [product, setProduct] = useState(ProductList);
  const [hideCart, setHideCart] = useState(true);
  const [hideFilter, setHideFilter] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Container>
      <Header
        hideCart={hideCart}
        setHideCart={setHideCart}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        cart={cart}
      />
        <Filters
          minFilter={minFilter}
          maxFilter={maxFilter}
          searchFilter={searchFilter}
          setMinFilter={setMinFilter}
          setMaxFilter={setMaxFilter}
          setSearchFilter={setSearchFilter}
          hideFilter={hideFilter}
          setHideFilter={setHideFilter}
        />
        <Home
          searchFilter={searchFilter}
          product={product}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          maxFilter={maxFilter}
          minFilter={minFilter}
        />

        <Cart
          amount={amount}
          cart={cart}
          setAmount={setAmount}
          setCart={setCart}
          hideCart={hideCart}
          setHideCart={setHideCart}
        />
      <FooterPage />
      </Container>
    </>
  );
}

export default App;

{
  /* <Home 
amount={amount}
cart={cart}
setAmount={setAmount}
setCart={setCart}
/> */
}
