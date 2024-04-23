import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <div>Navbar</div>
            <Outlet />
        </div>
    )
}

export default AuthLayout;