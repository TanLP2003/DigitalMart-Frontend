
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import AdminLayout from "./components/layouts/AdminLayout"
import CustomerLayout from "./components/layouts/CustomerLayout"
import Login from "./pages/Auth/Login"
import AuthLayout from "./components/layouts/AuthLayout"
import SignUp from "./pages/Auth/Signup"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import ResetPassword from "./pages/Auth/ResetPassword"
import ProtectedRoute from "./components/common/ProtectedRoute"
import { getProducts } from "./redux/fake-apis/product-fake-api"
import ExamplePage from "./pages/Customer/ExamplePage"
import CategoryAdmin from "./pages/Admin/CategoryAdmin"
import CreateCategory from "./pages/Admin/CategoryAdmin/CreateCategory"
import ViewCategory from "./pages/Admin/CategoryAdmin/ViewCategory"
import ProductAdmin from "./pages/Admin/ProductAdmin"
import OrderAdmin from "./pages/Admin/OrderAdmin"
import ChatAdmin from "./pages/Admin/ChatAdmin"
import Home from "./pages/Home"
import OurStore from "./pages/Our Store"
import Blogs from "./pages/blogs"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Admin/Dashboard"
import Inventory from "./pages/Admin/Inventory"

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Basket from "./pages/Customer/Basket";
import Checkout from "./pages/Customer/Checkout";
import BillInfo from "./pages/Customer/BillInfo";
// impoer ProductDetail from 
import { Outlet } from "react-router-dom"
import { MyProfile } from "./pages/Customer/My Profile";

import { WishList } from "./pages/Customer/WishList";
//import 'react-toastify/dist/ReactToastify.css';
import OrderDetails from "./pages/Admin/OrderAdmin/OrderDetails";
import ProductDetail from "./pages/Our Store/ProductDetail/ProductDetail"
import HomePage from "./pages/HomePage"
import ProductSearchPage from "./pages/HomePage/ProductSearchPage"

function App() {
  // const products = getProducts();
  // console.log(products);
  const images = [
    '../images/watch.jpg',
    '../images/watch1.png',
    '../images/watch2.png',
    '../images/watch3.jpg',
    '../images/watch4.jpg',
  ];
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        style={{ zIndex: 99999999999999 }}
      />
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/" element={<CustomerLayout />}>
            {/* <Route index element={<Home />} />
            <Route path="about" element={<ExamplePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<OurStore />} />
               <Route path="products/product_detail" element={<ProductDetail images={images} interval={3000}/>}/>

            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-products" element={<ExamplePage />} /> */}
            <Route index element={<HomePage />} />
            <Route path="product-detail/:productId" element={ProductDetail}/>
            <Route path="product-search-page" element={<ProductSearchPage />}/>
            <Route path="wishlist" element={<WishList />} />
            <Route path="profile" element={<MyProfile />} />
           
            <Route path="cart" element={<ExamplePage />} />
             <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<Outlet />}>
              <Route index element={<Checkout />} />
              <Route path="customer-bill-info" element={<BillInfo />} />
            </Route>

          </Route>
          <Route
            path="/admin"
            element={<ProtectedRoute role="admin" element={<AdminLayout />} />}
          >
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="category" element={<CategoryAdmin />} />
            <Route path="category/create" element={<CreateCategory />} />
            <Route path="/admin/category/:categoryId" element={<ViewCategory />} />
            <Route path="product" element={<ProductAdmin />} />
            <Route path="order" element={<Outlet />}>
              <Route index element={<OrderAdmin />} />
              <Route path="details" element={<OrderDetails />} />
            </Route>
            <Route path="inventory" element={<Inventory />} />
            <Route path="chat" element={<ChatAdmin />} />
          </Route>
          <Route
            path="/admin"
            element={<ProtectedRoute role="admin" element={<AdminLayout />} />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
