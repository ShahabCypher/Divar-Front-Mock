import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

import { getCategories } from "services/admin";
import { getCookie } from "utils/cookie";

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

    if (
      !form.title ||
      !form.content ||
      !form.amount ||
      !form.city ||
      !form.category
    )
      return;

    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }

    const token = getCookie("accessToken");
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch(() => toast.error("مشکلی پیش آمده است"));
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
        <input type="number" name="amount" id="amount" />
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
        <label htmlFor="images">عکس</label>
        <input type="file" name="images" id="images" multiple />
        <button onClick={addHandler}>ایجاد</button>
      </div>
    </form>
  );
};

export default AddPost;
