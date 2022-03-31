import React from "react";
import Image from "next/image";
import styles from "./cardTool.module.scss";
import Link from "next/link";
import axios from "axios";
// import { useState, useEffect } from "react";
import Loader from '../loader/loader'
import {getUrlImage} from '../../../publicFunction/func';

export const CardTool = ({item}) => {
  return (
    <div className={styles.card}>
      <Link href={`/tools/${item.id}`}>
        <a>
          <img src={`${getUrlImage(item.imageTool)}`} />
        </a>
      </Link>
      <div className={styles.offer}>
        <span>{item.price} р</span>
        <div className={styles.icon}>
          <img src="like.svg" alt="like" />
          <img src="cart.svg" alt="cart" />
        </div>
      </div>
      <span>{item.title}</span>
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
