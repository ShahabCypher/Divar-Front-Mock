import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "services/admin";

import style from "./AddPost.module.css";

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    city: "",
    category: "",
    amount: null,
    image: null,
  });
  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name === "image") {
      setForm({ ...form, [name]: e.target.files[0] });
    } else {
      setForm({ ...form, [name]: e.target.value });
    }
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log("addHandler");
  };

  return (
    <form className={style.form} onChange={changeHandler}>
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
