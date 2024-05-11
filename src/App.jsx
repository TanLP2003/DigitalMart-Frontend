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
import CategoryAdmin from "./pages/Admin/CategoryAdmin"
import ProductAdmin from "./pages/Admin/ProductAdmin"
import OrderAdmin from "./pages/Admin/OrderAdmin"
import InventoryAdmin from "./pages/Admin/InventoryAdmin"
import CustomerAdmin from "./pages/Admin/CustomerAdmin"
import ChatAdmin from "./pages/Admin/ChatAdmin"

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
            <Route path="login" element={<ExamplePage />} />
            <Route path="cart" element={<ExamplePage />} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute role="admin" element={<AdminLayout />} />}>
            <Route index element={<CustomerAdmin />} />
            <Route path="category" element={<CategoryAdmin />} />
            <Route path="product" element={<ProductAdmin />} />
            <Route path="order" element={<OrderAdmin />} />
            <Route path="inventory" element={<InventoryAdmin />} />
            <Route path="chat" element={<ChatAdmin />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
