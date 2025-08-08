import { sp } from "src/utils/numbers";

import styles from "./Main.module.css";

const Main = ({ posts }) => {
  const URL = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className={styles.container}>
      {posts.data.posts.map((post) => (
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
