import React from "react";
import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";
import axios from "axios";
// import { useState, useEffect } from "react";
import Loader from '../loader/loader'
import getUrlImage from '../../../publicFunction/func';

export const Card = ({ id, title, image, price }) => {
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   axios.get(`/api/${id}`).then((res) => {
  //     setProducts(res.data);
  //   });
  // }, []);
  // console.log("products", products);

  let url1 = "";
  let ur1 = [];
  ur1 = image.split("/");
  url1 = ur1[ur1.length - 1];

  return (
    <div className={styles.card}>
      <Link href={`/product/${id}`}>
        <a>
          <img src={`${process.env.NEXT_PUBLIC_DOMAIN}/media/${url1}`} />
          {/* <Image
            className={styles.image}
            src="/arrow.svg"
            alt="Vercel Logo"
            width={280}
            height={319}
          /> */}
        </a>
      </Link>
      <div className={styles.offer}>
        <span>{price} р</span>
        <div className={styles.icon}>
          <img src="like.svg" alt="like" />
          <img src="cart.svg" alt="cart" />
        </div>
      </div>
      <span>{title}</span>
      <div className={styles.bottom}>
        <button className={styles.btn}>
          Подробнее
          <img src="arrow.svg" />
        </button>
        <ul>
          <li>
            <img src="star.svg" />
          </li>
          <li>
            <img src="star.svg" />
          </li>
          <li>
            <img src="star.svg" />
          </li>
          <li>
            <img src="star.svg" />
          </li>
          <li>
            <img src="star.svg" />
          </li>
        </ul>
      </div>
    </div>
  );
};
