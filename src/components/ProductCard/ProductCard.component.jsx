import Button from "../Button/Button.component";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { image, name, category, price } = product;

  return (
    <article className={styles.card}>
      <picture>
        <source srcSet={image.desktop} media="(min-width: 768px)" />
        <img src={image.mobile} alt={name} />
      </picture>

      <p className={styles.category}>{category}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>${price.toFixed(2)}</p>

      <Button label="Add to Cart" />
    </article>
  );
}
