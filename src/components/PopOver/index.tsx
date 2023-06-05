import { useLayoutEffect, useState } from "react";
import { Container } from "./styles";

interface PopOverProps {
  show: boolean;
}

export function PopOver({ show = false }: PopOverProps) {
  const [popOverShow, setPopOverShow] = useState(false);

  useLayoutEffect(() => {
    setPopOverShow(true);

    setTimeout(() => setPopOverShow(false), 3000);
  }, [show]);

  return (
    <Container className={popOverShow ? "active" : ""}>
      <div className="title-popOver">Adicionado com Sucesso</div>
      <div className="content-popOver">
        <span>Oferta Cheddar Bacon</span>
        <ul>
          Ingredientes:
          <li>1 Carne 250gr</li>
          <li>2 Queijo Cheddar</li>
          <li>1 Bacon</li>
          <li>Molho especial</li>
        </ul>
      </div>
    </Container>
  )
}