import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="w-[1200px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
