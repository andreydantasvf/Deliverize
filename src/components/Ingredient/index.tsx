import { IncrementButton } from "../IncrementButton";
import { Container } from "./styles";

interface IngredientProps {
  title: string;
  price: number;
}

export function Ingredient({title, price}: IngredientProps) {
  return (
    <Container>
      {title}
      <IncrementButton />
      <span>+ R${price.toFixed(2).replace('.', ',')}</span>
    </Container>
  )
}