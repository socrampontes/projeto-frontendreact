import {TitleHeader,Button,ImgCart, Link,Logo,SearchName,OrganizaDiv} from './headerStyled'

export const Header = (props) => {

   

        const bntHideCart=()=>{
          props.setHideCart(!props.hideCart)
          }

    return(
        <>
        
        <TitleHeader>
           <Link href=""> <Logo src="https://images.vexels.com/media/users/3/224258/isolated/preview/a7cf859f0192935a55bd5e3f9d106271-logotipo-da-nave-espacial-voando.png" alt="" /> </Link>
           <div>
           
        <SearchName id='Search-name' type="text" placeholder="Busca por nome"/>
        </div>
        <Button onClick={bntHideCart} >
    <ImgCart
        src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
        alt=""
      /></Button>
        </TitleHeader>
        
        </>
    )
}