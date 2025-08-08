import CategoryForm from "components/templates/CategoryForm";
import CategoryList from "components/templates/CategoryList";

const AdminPage = () => {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  );
};

export default AdminPage;
