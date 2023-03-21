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
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  const [cart, setCart] = useState([]);
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [product, setProduct] = useState(ProductList);
  const [hideCart, setHideCart] = useState(true);
  const [hideFilter, setHideFilter] = useState(true);
  const [productOrdem, setProductOrdem] = useState("");
  const [amountItens, setAmountItens] = useState();
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header
          HideCart={hideCart}
          SetHideCart={setHideCart}
          SearchFilter={searchFilter}
          SetSearchFilter={setSearchFilter}
          Cart={cart}
          AmountItens={amountItens}
          setAmountItens={setAmountItens}
        />
        <Filters
          MinFilter={minFilter}
          MaxFilter={maxFilter}
          SetMinFilter={setMinFilter}
          SetMaxFilter={setMaxFilter}
          HideFilter={hideFilter}
          SetHideFilter={setHideFilter}
        />
        <Home
          SearchFilter={searchFilter}
          Product={product}
          Cart={cart}
          SetCart={setCart}
          MaxFilter={maxFilter}
          MinFilter={minFilter}
          ProductOrdem={productOrdem}
          SetProductOrdem={setProductOrdem}
        />
        <Cart
          Cart={cart}
          SetCart={setCart}
          HideCart={hideCart}
          SetHideCart={setHideCart}
        />
        <FooterPage />
      </Container>
    </>
  );
}

export default App;
