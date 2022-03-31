import styles from "./tools.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import BtnGroup from "../../src/components/btnGroup/btnGroup";
import { CardTool } from "../../src/components/cardTool/cardTool";

const index = () => {
  const [tools, setTools] = useState(null);
  const [itemsTools, setItemsTools] = useState(null); // initial items
  const [itemsSorted, setItemsSorted] = useState(null); //sorded items
  const [material, setMaterail] = useState(null);

  useEffect(() => {
    axios.get(`/apitools/group`).then((res) => {
      setTools(res.data);
    });
    axios.get(`/apitools`).then((res) => {
      setItemsTools(res.data);
      setItemsSorted(res.data);
    });

    axios.get(`/apitools/material`).then((res) => setMaterail(res.data));
  }, []);

  const sortedMaterial = (id) => {
    const sorted = itemsTools.filter((item) => item.material === id);
    setItemsSorted(sorted);
  };

  const funcBrand = (id) => {
    const sorted = itemsTools.filter((item) => item.brand === id);
    setItemsSorted(sorted)
  };

  return (
    <div className={styles.wrapItems}>
      <div className={styles.tools}>
        {tools
          ? tools.map((item) => (
              <BtnGroup key={item.id} item={item} funcBrand={funcBrand} />
            ))
          : null}
      </div>

      <div className={styles.wrapItemsMenu}>
        <div className={styles.wrapItemsMenuLeft}>
          <ul>
            <li onClick={() => setItemsSorted(itemsTools)}>reset</li>
            {material
              ? material.map((item) => (
                  <li key={item.id} onClick={() => sortedMaterial(item.id)}>
                    {item.title}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className={styles.items}>
          {itemsSorted
            ? itemsSorted.map((it) => <CardTool key={it.id} item={it} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default index;
