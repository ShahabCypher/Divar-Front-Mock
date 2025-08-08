import api from "configs/api";

const addCategory = (data) => api.post("category", data);

const getCategories = () => api.get("category");

const deleteCategory = async (id) => api.delete(`category/${id}`);

export { addCategory, getCategories, deleteCategory };
