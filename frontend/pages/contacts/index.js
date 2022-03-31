import Head from "next/head";
import styles from "./contacts.module.scss";

export default function Main() {
  return (
    <div>
      <Head>
        <title>contacts</title>
      </Head>
      <div className={styles.contacts}>
        <p>contacts - в разработке</p>
      </div>
    </div>
  );
}
