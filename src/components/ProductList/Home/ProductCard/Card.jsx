import {
  Home,
  Img,
  CardFormat,
  Description,
  Button,
  ImgButton,
} from "./cardStyled";
export const CardProduct = (props) => {
  const {
    ProductOrdem,
    Product,
    MinFilter,
    MaxFilter,
    Cart,
    SetCart,
    SearchFilter,
  } = props;
 
  const addCart = (product) => {
    const newCart = [...Cart];
   
  
    if (newCart.includes(product)) {
      newCart.filter((iten) => iten === product)[0].quantity++;

      SetCart(newCart);
    } else {
      Product.quantity = 1;
      const newCart2 = [...Cart, product];
      SetCart(newCart2);
    }
    console.log()
  };

  

  return (
    <Home>
      {Product.filter((product) => {
        if (SearchFilter) {
          return product.name
            .toLowerCase()
            .includes(SearchFilter.toLowerCase());
        } else {
          return Product;
        }
      })
        .filter((item) => (MaxFilter ? item.price <= MaxFilter : item))
        .filter((item) => (MinFilter ? item.price >= MinFilter : item))

        .sort((a, b) => {
          if (ProductOrdem === "crescente") {
            return a.price - b.price;
          }
          if (ProductOrdem === "decrescente") {
            return b.price - a.price;
          }
        })
        .map((product) => (
          <CardFormat key={product.id}>
            <div>
            <Img src={product.imagemURL} alt={product.name}/>
            </div>
            <Description>{product.name}</Description>

            <Description>valor: {product.price}</Description>

            <Button onClick={() => addCart(product)}>
              <ImgButton
                src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
                alt="botão adicionar"
              />
            </Button>
          </CardFormat>
        ))}
    </Home>
  );
};

