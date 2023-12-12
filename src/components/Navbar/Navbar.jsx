import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = (
        <>
            <li className="active:btn text-white text-lg   tpy-2 px-3">
                <Link to="/"> Home</Link>
            </li>
            <li className="active:btn text-white text-lg   tpy-2 px-3">
                <Link to="/about"> about</Link>
            </li>
            <li className="active:btn text-white white text-lg   tpy-2 px-3">
                <Link to="contact"> contact</Link>
            </li>
        </>
    );

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-blue-500 flex justify-between text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow z-40 bg-white rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/">
                        <a className="btn btn-ghost text-white normal-case text-3xl ">
                            Portfulio
                        </a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
