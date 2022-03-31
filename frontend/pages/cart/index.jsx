import styles from "./cart.module.scss";
import CircleBtn from "../../src/components/circleBtn";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Cart = ({ cart, removeItem }) => {
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);
  if (!cart.length) {
    return <div className={styles.wrapper}>корзина пуста</div>;
  }

  const getUrlImage = (image) => {
    let url1 = "";
    let ur1 = [];
    cart ? (ur1 = image.split("/")) : null;
    url1 = ur1[ur1.length - 1];
    return url1;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cartHeader}>
        <CircleBtn link={"/things"} />
        <h1 className={styles.title}>Корзина</h1>
        <div className={styles.cart}>
          <Image src="/cart.svg" width="26" height="30" />
          <div className={styles.length}>{cart.length}</div>
        </div>
      </div>

      <div className={styles.items}>
        {cartItems.map((item) => (
          <div className={styles.itemsItem} key={item.id}>
            <div className={styles.image}>
              <Link href={`/product/${item.id}`}>
                <a>
                  <img
                    src={`${process.env.NEXT_PUBLIC_DOMAIN}/media/${getUrlImage(
                      item.image_one
                    )}`}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.description}>
              <span>{item.title} - Арт 09456784</span>
              <span>Цвет: синий - Размер: 34</span>
              <div className={styles.icons}>
                <Image src="/like.svg" width="16" height="16" />В избранное
                <button onClick={() => removeItem(item.id)}>
                  <Image src="/trash.svg" width="16" height="16" />
                  Удалить
                </button>
              </div>
            </div>
            <div className={styles.coast}>
              <span>Стоимость</span>
              <p>{item.price} P</p>
              <h4>
                Информация о доставкe_
                <Image src="/arrow.svg" width="21" height="10" />
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.ellipse}>
        <Image src="/ellipse.svg" width="429" height="429" />
      </div>
    </div>
  );
};

export default Cart;

// item-element ->>
{
  /* <div className={styles.itemsItem}>
<div className={styles.image}>
  <img src="/itemImg1.png" />
</div>
<div className={styles.description}>
  <span>Платье женское - Арт 09456784</span>
  <span>Цвет: синий - Размер: 34</span>
  <div className={styles.icons}>
    <Image src="/like.svg" width="16" height="16" />В избранное
    <Image src="/trash.svg" width="16" height="16" />
    Удалить
  </div>
</div>
<div className={styles.coast}>
  <span>Стоимость</span>
  <p>50.00</p>
  <h4>
    Информация о доставкe_
    <Image src="/arrow.svg" width="21" height="10" />
  </h4>
</div>
</div> */
}
