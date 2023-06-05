import { Container } from "./styles";

export function PopOver({...rest}) {
  return (
    <Container
      {...rest}
    >
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