import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { IncrementButton } from "./components/IncrementButton"
import { Ingredient } from "./components/Ingredient"
import { Label } from "./components/Label"

import Lanche from "./assets/Lanche.png";
import { api } from "./services/api"
import { ProductType } from "./types/product"

import { Container, Content, ImageSnack, Prices, Form, Ingredients, Option, Buttons } from "./styles/app.styles"
import { Loading } from "./components/Loading"
import { PopOver } from "./components/PopOver"

function App() {
  const [data, setData] = useState<ProductType>([]);
  const [popOverShow, setPopOverShow] = useState(false);

  function showPopOver() {
    setPopOverShow(true);

    setTimeout(() => setPopOverShow(false), 3000);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("");
      setData(response.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />

      {
        data.length > 0 ?
          <Container>
            <Content>
              <ImageSnack>
                <img src={Lanche} alt="Picanha cheddar bacon" />
              </ImageSnack>

              <h1>{data[0].nm_product}</h1>
              <span>{data[0].description}</span>

              <Prices>
                <span>R${data[0].vl_price.toFixed(2).replace('.', ',')}</span>
                <span>R${data[0].vl_discount.toFixed(2).replace('.', ',')}</span>
              </Prices>
            </Content>

            <Form>
              <Label
                title="Adicionar Ingredientes"
                subtitle={`Até ${data[0].ingredients[0].max_itens} ingredientes.`}
              />

              <Ingredients>
                {data[0].ingredients[0].itens.map(ingredient => (
                  <Ingredient
                    key={String(ingredient.id)}
                    title={ingredient.nm_item}
                    price={ingredient.vl_item}
                    maxIngredients={data[0].ingredients[0].max_itens}
                  />
                ))}

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
                <IncrementButton
                  initialQuantity={1}
                  isIngredient={false}
                />
                <button type="button" onClick={showPopOver}>Adicionar</button>
              </Buttons>
            </Form>

            <PopOver className={popOverShow ? "active" : ""} />
          </Container >
          :
          <Loading />
      }
    </>
  )
}

export default App