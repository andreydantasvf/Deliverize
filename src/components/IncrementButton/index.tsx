import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

import { Container } from "./styles";

export function IncrementButton() {
  return (
    <Container>
      <AiOutlineMinus />
      0
      <AiOutlinePlus />
    </Container>
  )
}