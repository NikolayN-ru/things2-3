import styles from "./miniItem.module.scss";
import { getUrlImage } from "../../../../publicFunction/func";
import Link from "next/link";

const MiniItem = ({ item: { title, id, price, image_one } }) => {
  const getUrlImage = (image) => {
    const a = image.split("/");
    const b = a[a.length - 1];
    return `${process.env.NEXT_PUBLIC_DOMAIN}/media/${b}`;
  };

  return (
    <Link href={`/cart`}>
      <a>
        <div className={styles.itemBlock}>
          <img src={getUrlImage(image_one)} />
          <span>{title}</span>
          <span>{price}</span>
        </div>
      </a>
    </Link>
  );
};

export default MiniItem;
