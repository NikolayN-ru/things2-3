import styles from './btnGroup.module.scss';
import Link from "next/link";

const BtnGroup = ({item, funcBrand}) => {
  return (
	<div onClick={() => funcBrand(item.id)}>
	    {/* <Link href={`/tools/${item.id}`}> */}
      {/* <a> */}
        <div className={styles.btnWrapper}>{item.title}</div>
      {/* </a> */}
    {/* </Link> */}
	</div>
  )
}

export default BtnGroup