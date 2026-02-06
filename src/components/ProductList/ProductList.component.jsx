import ProductCard from "../ProductCard/ProductCard.component";
import styles from "./ProductList.module.css";
import products from "../../data/data.json";

export default function ProductList() {
  return (
    <section className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </section>
  );
}
