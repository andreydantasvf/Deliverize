import { AiOutlineDown, AiOutlineLeft, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

import { Container, Logo, Nav, Address, Icon } from "./styles";

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
          <BiUserCircle />
          Entrar
        </Icon>

        <Icon>
          <AiOutlineShoppingCart />
          Carrinho
          <div>1</div>
        </Icon>
      </Nav>
    </Container>
  )
}