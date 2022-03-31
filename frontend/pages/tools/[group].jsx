import styles from "./group.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Group = () => {
  const [items, setitems] = useState(null);
  const router = useRouter();
  const { group } = router.query;

  useEffect(() => {
    axios.get(`/apitools`).then((res) => {
		setitems(res.data);
    });
  }, []);
  console.log('items', items)

  return <div>group_id={group}
  </div>;
};

export default Group;
