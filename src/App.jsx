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
            <Route index element={<ExamplePage />} />
            <Route path="about" element={<ExamplePage />} />
            <Route path="contact" element={<ExamplePage />} />
            <Route path="products" element={<ExamplePage />} />
            <Route path="blogs" element={<ExamplePage />} />
            <Route path="compare-products" element={<ExamplePage />} />
            <Route path="wishlist" element={<ExamplePage />} />
            <Route path="login" element={<Login />} />
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
