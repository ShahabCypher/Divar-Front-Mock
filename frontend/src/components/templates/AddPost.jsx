import { useQuery } from "@tanstack/react-query";

import { getCategories } from "services/admin";

const AddPost = () => {
  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  const addHandler = (e) => {
    e.preventDefault();
    console.log("addHandler");
  };

  return (
    <form>
      <h3>افزودن آگهی</h3>
      <div>
        <label htmlFor="title">عنوان</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">محتوا</label>
        <textarea name="content" id="content" />
        <label htmlFor="amount">قیمت</label>
        <input type="text" name="amount" id="amount" />
        <label htmlFor="city">شهر</label>
        <input type="text" name="city" id="city" />
        <label htmlFor="category">دسته بندی</label>
        <select name="category" id="category">
          {data?.data.map((i) => (
            <option key={i._id} value={i._id}>
              {i.name}
            </option>
          ))}
        </select>
        <label htmlFor="image">عکس</label>
        <input type="file" name="image" id="image" />
        <button onClick={addHandler}>ایجاد</button>
      </div>
    </form>
  );
};

export default AddPost;
