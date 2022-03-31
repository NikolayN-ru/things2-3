import styles from "./miniCart.module.scss";
import Link from "next/link";
import MiniItem from "./miniItem/miniItem";

const MiniCart = ({ cart }) => {
  if (!cart.length) {
    return (
      <div className={styles.minicart}>
        <img src="/cart.svg" alt="cart" />
        <div className={styles.cartmenu}>
          <p>{"корзина пуста"}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.minicart}>
      <Link href="/cart">
        <a>
          <img src="/cart.svg" alt="cart" />
          {cart.length ? (
            <div className={styles.cartLength}>{cart.length}</div>
          ) : null}
        </a>
      </Link>
      <div className={styles.cartmenu}>
        {cart.map((item) => (
          <MiniItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MiniCart;
