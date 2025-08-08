import { useQuery } from "@tanstack/react-query";

import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import Loader from "components/modules/Loader";
import { getAllPosts } from "services/user";
import { getCategories } from "services/admin";

const style = { display: "flex" };

const HomePage = () => {
  const { data: posts, isPending: postsPending } = useQuery({
    queryKey: ["posts-list"],
    queryFn: getAllPosts,
  });
  const { data: categories, isPending: categoriesPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  return (
    <>
      {postsPending || categoriesPending ? (
        <Loader />
      ) : (
        <div style={style}>
          <SideBar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
};

export default HomePage;
