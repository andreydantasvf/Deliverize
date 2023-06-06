import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { decrementQuantity, incrementQuantity } from "../../redux/quantityIngredientsSlice";

import { Container } from "./styles";

interface IncrementButtonProps {
  initialQuantity?: number;
  isIngredient?: boolean;
  maxIngredients?: number;
}

export function IncrementButton({ initialQuantity = 0, isIngredient = true, maxIngredients = 10 }: IncrementButtonProps) {
  const [count, setCount] = useState<number>(initialQuantity);

  const { quantity } = useAppSelector(state => state.quantityIngredients);
  const dispatch = useAppDispatch();

  function handleIncrement() {
    if (isIngredient) {
      if (quantity < maxIngredients) {
        setCount(count + 1);
        dispatch(incrementQuantity())
      }
    } else {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);

      if (isIngredient) {
        dispatch(decrementQuantity())
      }
    }
  }

  return (
    <Container>
      <AiOutlineMinus className={count === 0 ? "disabled" : ""} onClick={handleDecrement} />
      {count}
      <AiOutlinePlus className={quantity === maxIngredients && isIngredient ? "disabled" : ""} onClick={handleIncrement} />
    </Container>
  )
}