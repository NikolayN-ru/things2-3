import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import Search from "../components/search/search";
import MiniCart from "../components/miniCart/miniCart";

const navigation = [
  { id: 1, title: "главная", path: "/" },
  { id: 2, title: "пряжа", path: "/yarn" },
  { id: 3, title: "инструменты", path: "/tools" },
  { id: 4, title: "изделия", path: "/things" },
  { id: 5, title: "о нас", path: "/about" },
  { id: 6, title: "контакты", path: "/contacts" },
];

export const Header = ({cart}) => {
  const { pathname } = useRouter();
  return (
    <div className={styles.header}>
      <ul className={styles.mainMenu}>
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link href={path} className={styles.link}>
              <a
                className={cn({
                  [styles.active]: pathname == path,
                  [styles.link]: pathname != path,
                })}
              >
                {title}
              </a>
              {/* <a className={pathname == path ? styles.active : styles.link}>
                {title}
              </a> */}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.topPanel}>
        <img src="search.svg" />
        <Search />
        <input placeholder="поиск" />
        <img src="/person.svg" alt="person" />
        <img src="/like.svg" alt="like" />
        <div>
          {/* <Link href="/cart">
            <a>
              <img src="/cart.svg" alt="cart" />
            </a>
          </Link> */}
          <MiniCart cart={cart}/>
        </div>
      </div>
    </div>
  );
};
