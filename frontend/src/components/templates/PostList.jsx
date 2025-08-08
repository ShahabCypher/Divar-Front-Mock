import { useQuery } from "@tanstack/react-query";

import { getPosts } from "services/user";

const PostList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["my-post-list"],
    queryFn: getPosts,
  });

  return <div>PostList</div>;
};

export default PostList;
