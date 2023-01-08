import { Outlet, Link } from "react-router-dom";

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link to={'/'} style={linkStyle}><h1><span className="logo">React</span>App</h1></Link>
                <div className="navbar-opts">
                    <Link to={'/login'} style={linkStyle}><h3 className="links">Login</h3></Link>
                    <Link to={'/register'} style={linkStyle}><h3 className="links">Register</h3></Link>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default Navbar;