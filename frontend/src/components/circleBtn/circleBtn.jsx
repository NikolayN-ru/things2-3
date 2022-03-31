import styles from "./circle.module.scss";
import Image from "next/image";
import Link from "next/link";
// import {arrowLeft} from '/arrow-left.svg';

const CircleBtn = ({ link='/' }) => {
  return (
    <div className={styles.circle}>
      <Link href={link}>
        <a>
          <Image src="/arrow-left.svg" alt="arrow" width={72} height={16} />
        </a>
      </Link>
    </div>
  );
};

export default CircleBtn;
