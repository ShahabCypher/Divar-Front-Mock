import Header from "layouts/Header";
import Footer from "layouts/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
