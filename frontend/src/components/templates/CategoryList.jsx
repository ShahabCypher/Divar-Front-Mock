import { useQuery } from "@tanstack/react-query";

import Loader from "../modules/Loader";
import { getCategories } from "services/admin";

import styles from "./CategoryList.module.css";

const CategoryList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  return (
    <div className={styles.list}>
      {isPending ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i.id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>slug: {i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
