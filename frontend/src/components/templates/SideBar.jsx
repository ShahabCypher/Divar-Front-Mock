import { NavLink } from "react-router-dom";

import styles from "./SideBar.module.css";

const SideBar = ({ categories, current: { slug, id }, setCategory }) => {
  return (
    <div className={styles.sidebar}>
      <h4>دسته بندی ها</h4>
      <ul>
        {slug && (
          <NavLink
            onClick={() => setCategory({})}
            className={slug === "all" ? styles.active : ""}
          >
            <img src="back.svg" />
            <p>همه</p>
          </NavLink>
        )}
        {categories.data.map((category) => (
          <NavLink
            key={category._id}
            onClick={() =>
              setCategory({ slug: category.slug, id: category._id })
            }
            className={slug === category.slug ? styles.active : ""}
          >
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
