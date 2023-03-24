import {
  Footer,
  Link,
  Logo,
  CreatedBy,
  Icons,
  DivOrganization,
  Menu,
} from "./footerStyled";

export const FooterPage = () => {
  return (
    <>
      <Footer>
        <DivOrganization>
         <Link href="./app"> <Logo src="https://images.vexels.com/media/users/3/224258/isolated/preview/a7cf859f0192935a55bd5e3f9d106271-logotipo-da-nave-espacial-voando.png" alt="" /> </Link>
          
          <div></div>
            <Menu>
            <h3>Contato</h3>
              <Link href="https://github.com/socrampontes">
                <Icons src={"./img/icons8-github-512.png"} /> 
              </Link>

              <Link href="https://www.linkedin.com/in/pontes-marcos/">
                <Icons src={"./img/icons8-linkedin-500.png"} />
              </Link>

              <Link href="mailto:socrampontes@gmail.com">
                <Icons src={"./img/icons8-mail-500.png"} />
              </Link>
            </Menu>
          
        </DivOrganization>
        <CreatedBy>Created By Marcos Pontes © All Rights Reserved.</CreatedBy>
      </Footer>
    </>
  );
};
