import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (<nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">React Router Demo</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
                    <li className={location.pathname === '/list' ? 'active' : ''}><Link to="/list">Quotes</Link></li>
                </ul>
            </div>
        </div>
    </nav>);
};

export default Navbar;