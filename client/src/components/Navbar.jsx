import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>
            <Link to="/">Home</Link> |{' '}
            <Link to="/login">Login</Link> |{' '}
            <Link to="/register">Register</Link> |{' '}
            <Link to="/logout">Logout</Link> |{' '}
        </nav>
    );
};

export default Navbar;
