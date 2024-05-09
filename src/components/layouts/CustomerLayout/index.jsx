import { Outlet } from "react-router-dom";
import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const CustomerLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default CustomerLayout;
