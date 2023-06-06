import { IncrementButton } from "../IncrementButton";
import { Container } from "./styles";

interface IngredientProps {
  title: string;
  price: number;
  maxIngredients: number;
}

export function Ingredient({ title, price, maxIngredients }: IngredientProps) {
  return (
    <Container>
      {title}
      <IncrementButton maxIngredients={maxIngredients} />
      <span>+ R${price.toFixed(2).replace('.', ',')}</span>
    </Container>
  )
}