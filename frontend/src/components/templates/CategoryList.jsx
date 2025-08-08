import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Loader from "../modules/Loader";
import { getCategories, deleteCategory } from "services/admin";

import styles from "./CategoryList.module.css";

const CategoryList = () => {
  const [disabledButtons, setDisabledButtons] = useState({});
  const { data, isPending, refetch } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  const deleteHandler = async (id) => {
    setDisabledButtons((prev) => ({ ...prev, [id]: true }));
    await deleteCategory(id);
    refetch();
  };

  return (
    <div className={styles.list}>
      {isPending ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p>slug: {i.slug}</p>
            <button
              onClick={() => deleteHandler(i._id)}
              disabled={disabledButtons[i._id]}
            >
              حذف
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
