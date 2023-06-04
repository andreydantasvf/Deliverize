import { AiOutlineLeft } from "react-icons/ai";

import { Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <AiOutlineLeft />

      <Logo>
        <img src="/Deliverize.png" alt="Logo Deliverize" />
      </Logo>
    </Container>
  )
}