import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import AdminLayout from "./components/layouts/AdminLayout"
import CustomerLayout from "./components/layouts/CustomerLayout"
import Login from "./pages/Auth/Login"
import AuthLayout from "./components/layouts/AuthLayout"
import SignUp from "./pages/Auth/Signup"
import ProtectedRoute from "./components/common/ProtectedRoute"
import { getProducts } from "./redux/fake-apis/product-fake-api"
import ExamplePage from "./pages/Customer/ExamplePage"
import Home from "./pages/Home"
import OurStore from "./pages/Our Store"
import Blogs from "./pages/blogs"
import Contact from "./pages/Contact"

function App() {
  const products = getProducts();
  console.log(products);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/" element={<CustomerLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<ExamplePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<OurStore/>} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-products" element={<ExamplePage />} />
            <Route path="wishlist" element={<ExamplePage />} />
            <Route path="login" element={<ExamplePage />} />
            <Route path="cart" element={<ExamplePage />} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute role="admin" element={<AdminLayout />}/>}>

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
