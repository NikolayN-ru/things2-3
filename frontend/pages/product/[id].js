import Head from "next/head";
// import Image from "next/image";
import styles from "../../styles/itemId.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "../../src/components/loader/loader";
import CircleBtn from "../../src/components/circleBtn";

export default function Main({ addCart }) {
  const router = useRouter();
  const { id } = router.query;

  const [products, setProducts] = useState(null);
  const [imageMain, setImageMain] = useState(null);

  let url1 = "";
  let url2 = "";
  let url3 = "";
  let ur1 = [];
  let ur2 = [];
  let ur3 = [];
  useEffect(() => {
    id
      ? axios.get(`/api/${id}`).then((res) => {
          setProducts(res.data);
          setImageMain(url1);
        })
      : null;
  }, [id]);

  products ? (ur1 = products.image_one.split("/")) : null;
  url1 = ur1[ur1.length - 1];

  products ? (ur2 = products.image_too.split("/")) : null;
  url2 = ur2[ur2.length - 1];

  products ? (ur3 = products.image_free.split("/")) : null;
  url3 = ur3[ur3.length - 1];

  const changeImageMain = (url) => {
    setImageMain(url);
  };

  return (
    <div className={styles.itemId}>
      <Head>
        <title>{products && products.title}</title>
      </Head>
      <div className={styles.title}>
        <CircleBtn link="/things" />
        <h1>{products && products.title}</h1>
        {/* <span>Арт 06578990-086</span> */}
      </div>
      <div className={styles.mainCard}>
        <div className={styles.mainImages}>
          <div className={styles.mainImage}>
            {imageMain ? (
              <img
                src={`${process.env.NEXT_PUBLIC_DOMAIN}/media/${imageMain}`}
              />
            ) : (
              <img src={`${process.env.NEXT_PUBLIC_DOMAIN}/media/${url1}`} />
            )}
          </div>
          <ul className={styles.imageItems}>
            <li>
              {url1 ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_DOMAIN}/media/${url1}`}
                  onClick={() => changeImageMain(url1)}
                />
              ) : (
                <Loader />
              )}
            </li>
            <li>
              <img
                src={`${process.env.NEXT_PUBLIC_DOMAIN}/media/${url2}`}
                onClick={() => changeImageMain(url2)}
              />
            </li>
            <li>
              <img
                src={`${process.env.NEXT_PUBLIC_DOMAIN}/media/${url3}`}
                onClick={() => changeImageMain(url3)}
              />
            </li>
          </ul>
        </div>
        <div className={styles.mainDesc}>
          <p className={styles.mainOffer}>{products && products.price}P.</p>
          {/* <p className={styles.nameColor}>Цвета</p>
          <ul className={styles.colors}>
            <li style={{ backgroundColor: "black" }}></li>
            <li style={{ backgroundColor: "#1FA68E" }}></li>
            <li style={{ backgroundColor: "#DC39CC" }}></li>
            <li style={{ backgroundColor: "#FFF385" }}></li>
            <li style={{ backgroundColor: "#fff" }}></li>
          </ul>
          <p className={styles.nameColor}>Размер</p>
          <ul className={styles.mainSize}>
            <li>
              <p>S</p>
              <span>42</span>
            </li>
            <li>
              <p>M</p>
              <span>44</span>
            </li>
            <li>
              <p>L</p>
              <span>46</span>
            </li>
            <li>
              <p>XL</p>
              <span>48</span>
            </li>
          </ul> */}
          <p className={styles.tableSize}>Таблица размеров</p>
          <div className={styles.blockBtn}>
            <button className={styles.btn} onClick={() => addCart(products)}>
              В корзину
              <img src="/cart2.svg" alt="cart" />
            </button>
            <img src="/like2.svg" />
          </div>
          <p className={styles.tableSize}>Смотреть все отзывы</p>
          <p className={styles.tableSize}>Добавить отзыв</p>
          <p>Наличие</p>
          <p className={styles.description}>
            {products ? "в наличии" : "нет в наличии"}
          </p>
          <p>Описание</p>
          <p className={styles.description}>{products && products.content}</p>
        </div>
        {/* <p>Отзывы о товаре</p> */}
        {/* <button className={styles.btn}>Добавить отзыв</button> */}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   // const data = []
//   const data = axios.get(`/api/${2}`).then((res) => {
//     res.data;
//   });
//   const data2 = data.then((res) => {res})
//   // data.then((d) => const data2 = d)
//   const message = "YOYO";

//   console.log(data2, 'data2')
//   return { props: { message } };
// }
