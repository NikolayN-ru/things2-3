import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Catalog from "../src/components/catalog";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from '../src/components/loader/loader';


export default function Main() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("/api/").then((res) => {
      setProducts(res.data);
    });
  }, []);
  // console.log("products", products);

  return (
    <div className={styles.body}>
      <Head>
        <title>главная страница</title>
      </Head>
      <Loader />
      {/* {products
        ? products.map(({ id, title }) => (
            <p key={id}>
              {title}-{id}
            </p>
          ))
        : null} */}
      {/* <Catalog /> */}
    </div>
  );
}
