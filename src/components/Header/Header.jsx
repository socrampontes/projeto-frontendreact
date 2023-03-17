import {TitleHeader,Button,ImgCart, Link,Logo,SearchName,Counter} from './headerStyled'

export const Header = (props) => {

   

        const bntHideCart=()=>{
          props.setHideCart(!props.hideCart)
          }

          const searchByName =(e)=>{
            props.setSearchFilter(e.target.value)
          }
          let counter = 0;
  for (let obj of props.cart) {
    if (obj.quantidade === 1) counter++;
  }

    return(
        <>
        
        <TitleHeader>
           <Link href=""> <Logo src="https://images.vexels.com/media/users/3/224258/isolated/preview/a7cf859f0192935a55bd5e3f9d106271-logotipo-da-nave-espacial-voando.png" alt="" /> </Link>
           <div>
           
        <SearchName type="text"
          placeholder="Pesquisa por item "
        value={props.searchFilter}
        onChange={searchByName}/>
        </div>
        <Button onClick={bntHideCart} >
    <ImgCart
        src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
        alt=""
      /><Counter>{counter}</Counter></Button>
        </TitleHeader>
        
        </>
    )
}