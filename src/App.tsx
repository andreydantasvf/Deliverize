import { useState } from "react"
import { Header } from "./components/Header"
import { IncrementButton } from "./components/IncrementButton"
import { Ingredient } from "./components/Ingredient"
import { Label } from "./components/Label"

import { Container, Content, ImageSnack, Prices, Form, Ingredients, Option, Buttons, PopOver } from "./styles"

function App() {
  const [popOverShow, setPopOverShow] = useState(false);

  function showPopOver() {
    setPopOverShow(true);

    setTimeout(() => setPopOverShow(false), 3000);
  }

  return (
    <>
      <Header />

      <Container>
        <Content>
          <ImageSnack>
            <img src="/Lanche.png" alt="Picanha cheddar bacon" />
          </ImageSnack>

          <h1>Oferta picanha cheddar bacon</h1>
          <span>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</span>

          <Prices>
            <span>R$31,99</span>
            <span>R$34,95</span>
          </Prices>
        </Content>

        <Form>
          <Label
            title="Adicionar Ingredientes"
            subtitle="Até 8 ingredientes."
          />

          <Ingredients>
            <Ingredient
              title="Queijo cheddar"
              price={4.99}
            />
            <Ingredient
              title="Cebola crispy"
              price={1.50}
            />
            <Ingredient
              title="Queijo cheddar"
              price={3.50}
            />
            <Ingredient
              title="Queijo cheddar"
              price={3.50}
            />
          </Ingredients>

          <Label
            title="Precisa de Talher?"
          />

          <Option>
            <label htmlFor="yes">Sim</label>
            <input type="radio" name="option" value="sim" />
          </Option>
          <Option>
            <label htmlFor="no">Não</label>
            <input type="radio" name="option" value="no" />
          </Option>

          <Buttons>
            <IncrementButton />
            <button type="button" onClick={showPopOver}>Adicionar</button>
          </Buttons>
        </Form>
      </Container >

      <PopOver className={popOverShow ? "active" : ""}>
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
      </PopOver>
    </>
  )
}

export default App