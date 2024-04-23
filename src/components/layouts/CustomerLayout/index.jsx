import { Outlet } from "react-router-dom";
import { Header } from "../../common/Header";


const CustomerLayout = () => {
    return (
    <>
        <Header />
        <Outlet />
    </>
    )
}

export default CustomerLayout;