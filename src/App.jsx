import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import AdminLayout from "./components/layouts/AdminLayout"
import CustomerLayout from "./components/layouts/CustomerLayout"
import Login from "./pages/Auth/Login"
import AuthLayout from "./components/layouts/AuthLayout"
import SignUp from "./pages/Auth/Signup"
import ProtectedRoute from "./components/common/ProtectedRoute"
import { getProducts } from "./redux/fake-apis/product-fake-api"

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
