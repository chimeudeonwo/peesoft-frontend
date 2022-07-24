import { Outlet, Link } from "react-router-dom";
import PeeSoftApp from "../../PeeSoftApp";
import './Layout.scss'

const Layout = () => {
    return (
        <>
            <PeeSoftApp/>
            <nav>
                <ul>
                    <li>
                        <Link to="/"></Link>
                    </li>
                    <li>
                        <Link to="/register"></Link>
                    </li>
                    <li>
                        <Link to="/login"></Link>
                    </li>
                    <li>
                        <Link to="/services"></Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;