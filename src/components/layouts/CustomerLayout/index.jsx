import { Outlet } from "react-router-dom";
import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";

const CustomerLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default CustomerLayout;
