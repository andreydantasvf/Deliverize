import { Header } from "./components/Header"
import { IncrementButton } from "./components/IncrementButton"
import { Ingredient } from "./components/Ingredient"
import { Label } from "./components/Label"

import { Container, ImageSnack, Prices, Ingredients, Option, Buttons } from "./styles"

function App() {

  return (
    <>
      <Header />

      <Container>
        <ImageSnack>
          <img src="/Lanche.png" alt="Picanha cheddar bacon" />
        </ImageSnack>

        <h1>Oferta picanha cheddar bacon</h1>
        <span>Delicioso hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim, acompanhamento e bebida.</span>

        <Prices>
          <span>R$31,99</span>
          <span>R$34,95</span>
        </Prices>

        <form>
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
            <button>Adicionar</button>
          </Buttons>
        </form>
      </Container>
    </>
  )
}

export default App