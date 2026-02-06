import styles from "./Cart.module.css";

export default function Cart() {
  return (
    <aside className={`${styles.cart} flex gap-3`}>
      <h2 className="font-700">Your Cart (0)</h2>

      <p className={styles.empty}>Your added items will appear here</p>

      <div className="flex justify-space-between">
        <span>Order Total</span>
        <strong className="font-700">$46.50</strong>
      </div>

      <div className={`${styles.carbon} flex align-center gap-1`}>
        <span>Tree</span>
        <span>This is a carbon-neutral delivery</span>
      </div>

      <button className={styles.confirm}>Confirm Order</button>
    </aside>
  );
}
