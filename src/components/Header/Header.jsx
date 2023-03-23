import {
  TitleHeader,
  Button,
  ImgCart,
  Link,
  Logo,
  SearchName,
  Counter,
  FreteGratis
} from "./headerStyled";
export const Header = (props) => {
  
  const { HideCart, SetHideCart, SearchFilter, SetSearchFilter, Cart,AmountItens,
  setAmountItens } = props;

  const bntHideCart = () => {
    SetHideCart(!HideCart);
  };

  const searchByName = (e) => {
    SetSearchFilter(e.target.value);
  };


  let counter = 0;
  for (let obj of Cart ) {
    if (obj.quantity>0) 
    counter += obj.quantity
    }
    if(counter === 0){
      counter =""
    }


  return (
    <>
    
      <TitleHeader>
        <Link href="">
          <Logo
            src="https://images.vexels.com/media/users/3/224258/isolated/preview/a7cf859f0192935a55bd5e3f9d106271-logotipo-da-nave-espacial-voando.png"
            alt="LOGO"
          />
        </Link>
        <form>
          <SearchName
            type="text"
            placeholder="Pesquisa por item "
            value={SearchFilter}
            onChange={searchByName}
          />
          
        </form>
        <Button onClick={bntHideCart}>
          <ImgCart
            src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
            alt="CARRINHO"
          />
          <div>
            <Counter>{counter}</Counter>
          </div>
        </Button>
      </TitleHeader>
    </>
  );
};
