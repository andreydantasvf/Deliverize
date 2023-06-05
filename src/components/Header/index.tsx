import { AiOutlineDown, AiOutlineLeft } from "react-icons/ai";

import { Container, Logo, Nav, Address, Icon } from "./styles";

import UserIcon from "../../assets/userIcon.svg";
import CartIcon from "../../assets/cartIcon.svg";

export function Header() {
  return (
    <Container>
      <AiOutlineLeft />

      <Logo>
        <img src="/Deliverize.png" alt="Logo Deliverize" />
      </Logo>

      <Nav>
        <Address>
          <span>Entrega:</span>
          <AiOutlineDown />
          R. Antonio Braune, 222
        </Address>

        <input type="text" placeholder="Busque por estabelecimento ou produtos" />

        <Icon>
          <img src={UserIcon} alt="Icone Usuário" />
          Entrar
        </Icon>

        <Icon>
          <img src={CartIcon} alt="Icone Carrinho" />
          Carrinho
          <div>1</div>
        </Icon>
      </Nav>
    </Container>
  )
}