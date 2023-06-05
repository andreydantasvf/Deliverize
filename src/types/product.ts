export type ProductType = Product[]

interface Product {
    id: string;
    createdAt: string;
    nm_product: string;
    description: string;
    vl_price: number;
    vl_discount: number;
    url_image: string;
    ingredients: IngredientGroup[];
  }
  
  interface IngredientGroup {
    group: string;
    max_itens: number;
    type: "number" | "boolean";
    itens: Ingredient[];
  }
  
  interface Ingredient {
    id: number;
    nm_item: string;
    vl_item: number;
  }