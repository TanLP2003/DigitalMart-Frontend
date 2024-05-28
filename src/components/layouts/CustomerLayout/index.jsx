import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../../hooks/AuthContext";
import "react-toastify/ReactToastify.css";

const CustomerLayout = () => {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
};

export default CustomerLayout;
