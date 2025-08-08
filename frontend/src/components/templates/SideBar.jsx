import { useQuery } from "@tanstack/react-query";

import { getCategories } from "services/admin";

const SideBar = () => {
  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  return (
    <div>
      <h4>دسته بندی ها</h4>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
