import { sp } from "src/utils/numbers";

import styles from "./Main.module.css";

const Main = ({ posts, category: { id: categoryId } }) => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const data = categoryId
    ? posts.data.posts.filter((post) => post.category === categoryId)
    : posts.data.posts;

  return (
    <div className={styles.container}>
      {data.map((post) => (
        <div key={post._id} className={styles.card}>
          <div className={styles.info}>
            <p>{post.options.title}</p>
            <div>
              <p>{sp(post?.amount)} تومان</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img src={`${URL}${post.images[0]}`} />
        </div>
      ))}
    </div>
  );
};

export default Main;
