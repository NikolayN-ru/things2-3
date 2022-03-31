import React from "react";
import styles from "./catalog.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import cn from "classnames";
import Loader from "../loader/Loader";

import Card from "../card";

const Catalog = () => {
  const [products, setProducts] = useState(null); //initial data
  const [filtered, setFiltered] = useState(null); //filtered data
  const [category, setCategory] = useState(null);
  const [linkFilter, useLinkFilter] = useState(null);

  useEffect(() => {
    axios.get("/api").then((res) => {
      setProducts(res.data);
      setFiltered(res.data);
    });

    axios.get("/api/category").then((res) => {
      setCategory(res.data);
    });
  }, []);

  const filterItems = (id) => {
    const filterItems = products.filter((p) => p.category === id);
    setFiltered(filterItems);

    const sortedCategory = category.find((item) => item.id === id);
    useLinkFilter(sortedCategory.title);
  };

  const refetFilter = () => {
    setFiltered(products);
    useLinkFilter(null);
  };

  const sortedPrice = () => {
    const newArr = products.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
    setFiltered(newArr);
  };

  return (
    <div className={styles.catalog}>
      <h1 className={styles.title}>Каталог изделий</h1>
      <ul className={styles.sortedItems}>
        <p>Сортировать по:</p>
        <li>Популярности</li>
        <li>Рейтингу</li>
        <li onClick={() => sortedPrice()}>Цене</li>
        <li>Скидке</li>
        <li>Обновлению</li>
      </ul>
      <div className={styles.cards}>
        <div className={styles.menuBlock}>
          <ul className={styles.menuItems}>
            <li onClick={() => refetFilter()}>сброс фильтра</li>
            {category ? (
              category.map(({ id, title }) => (
                <li
                  key={id}
                  onClick={() => filterItems(id)}
                  className={cn({
                    [styles.activeLink]: title == linkFilter,
                  })}
                >
                  {title}
                </li>
              ))
            ) : (
              <Loader />
            )}
          </ul>
        </div>
        <div className={styles.cardsBlock}>
          {/* {products
            ? products.map(({ id, title, image_one, price }) => (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  image={image_one}
                  price={price}
                />
              ))
            : null} */}
          {filtered
            ? filtered.map(({ id, title, image_one, price }) => (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  image={image_one}
                  price={price}
                />
              ))
            : null}
          {!filtered
            ? products
              ? products.map(({ id, title, price, image_one }) => (
                  <Card
                    key={id}
                    id={id}
                    title={title}
                    image={image_one}
                    price={price}
                  />
                ))
              : null
            : null}
        </div>
      </div>
    </div>
  );
};

export default Catalog;

// export async function getServerSideProps() {
//   let data = [];
//   axios.get(`/api`).then((res) => {
//     data = res.data;
//   });
//   return { props: { data } };
// }
