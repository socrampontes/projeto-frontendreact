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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100vw;
`;

function App() {
  const [amount, setAmount] = useState("");
  const [cart, setCart] = useState([]);
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [product, setProduct] = useState(ProductList);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Filters
          minFilter={minFilter}
          maxFilter={maxFilter}
          searchFilter={searchFilter}
          setMinFilter={setMinFilter}
          setMaxFilter={setMaxFilter}
          setSearchFilter={setSearchFilter}
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
        />
      </Container>
      <FooterPage />
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
