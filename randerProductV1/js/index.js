import { CardComponent } from "../components/CardComponent.js";
import { products } from "../data/products.js";

let renderProdcut = document.querySelector("#renderProdcut");

console.log(products)


products.map((product) => (renderProdcut.innerHTML =CardComponent(product)))

