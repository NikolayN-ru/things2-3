import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <ul>
          <p>Информация</p>
          <li>Главная</li>
          <li>Акции</li>
          <li>Каталог</li>
          <li>Возврат</li>
          <li>Доставка</li>
          <li>Партнёрам</li>
          <li>Способы оплаты</li>
          <li>Как сделать заказ?</li>
        </ul>
        <ul>
          <p>Мой кабинет</p>
          <li>Мои заказы</li>
          <li>Мои адреса</li>
          <li>Мои скидки</li>
          <li>Моя информация</li>
        </ul>
        <ul>
          <p>Контактная информация</p>
          <li>Н Николай +79994559707</li>
        </ul>
        <ul>
          <p>Соц. сети</p>
          <li>+9995449707</li>
          <li>круглосуточно, без выходных</li>
        </ul>
      </div>
      <ul className={styles.wrapper}>
        <li className={styles.icon + " " + styles.facebook}>
          <Image src="/t.png" width="20" height="20" />
          <span className={styles.tooltip}>Telegram</span>
          <span>
            <i className={styles.fab + " " + styles.facebook}></i>
          </span>
        </li>
        <li className={styles.icon + " " + styles.twitter}>
          <Image src="/tv3.png" width="60" height="60" />
          <span className={styles.tooltip}>Twitter</span>
          <span>
            <i className={styles.fab + " " + styles.twitter}></i>
          </span>
        </li>
        <li className={styles.icon + " " + styles.instagram}>
          <Image src="/in.png" width="60" height="60" />
          <span className={styles.tooltip}>Instagram</span>
          <span>
            <i className={styles.fab + " " + styles.instagram}></i>
          </span>
        </li>
        <li className={styles.icon + " " + styles.github}>
          <Image src="/git2.png" width="600" height="600" />
          <span className={styles.tooltip}>Github</span>
          <span>
            <i className={styles.fab + " " + styles.github}></i>
          </span>
        </li>
        <li className={styles.icon + " " + styles.youtube}>
          <Image src="/y3.png" width="60" height="60" />
          <span className={styles.tooltip}>Youtube</span>
          <span>
            <i className={styles.fab + " " + styles.youtube}></i>
          </span>
        </li>
      </ul>
    </div>
  );
};
