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
import AdminProfile from "./pages/Admin/AdminProfile"
import Home from "./pages/Home"
import OurStore from "./pages/Our Store"
import Blogs from "./pages/blogs"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Admin/Dashboard"
import Inventory from "./pages/Admin/Inventory"
import { Bounce, ToastContainer } from "react-toastify";
import { MyProfile } from "./pages/Customer/My Profile";
import { WishList } from "./pages/Customer/WishList";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const products = getProducts();
  // console.log(products);
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
            <Route index element={<Home />} />
            <Route path="about" element={<ExamplePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<OurStore />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-products" element={<ExamplePage />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="profile" element={<MyProfile />} />
           
            <Route path="cart" element={<ExamplePage />} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute role="admin" element={<AdminLayout />} />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="category" element={<CategoryAdmin />} />
            <Route path="category/create" element={<CreateCategory />} />
            <Route path="/admin/category/:categoryId" element={<ViewCategory />} />
            <Route path="product" element={<ProductAdmin />} />
            <Route path="order" element={<OrderAdmin />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="chat" element={<ChatAdmin />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
