import React from 'react';
// TODO: Import the Link component from react-router

const Navbar = () => {
    return (<nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">React Router Demo</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        // TODO: Add link to the home route
                    </li>
                    <li className={location.pathname === '/list' ? 'active' : ''}>
                        // TODO: Add link to the lists route
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
};

export default Navbar;