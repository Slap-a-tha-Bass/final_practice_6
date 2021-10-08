import React from 'react';
import { NavLink } from 'react-router-dom';
import RootLayout from './RootLayout';

const NavBar = () => {
    return (
        <div className="d-flex justify-content-center border-secondary border-bottom border-3 py-2">
            <NavLink className="btn btn-sm btn-outline-info mx-4 bg-secondary border rounded-pill" exact to='/'>home</NavLink>
            <NavLink className="btn btn-sm btn-outline-info mx-4 bg-secondary border rounded-pill" exact to='/books'>books</NavLink>
            <NavLink className="btn btn-sm btn-outline-info mx-4 bg-secondary border rounded-pill" exact to='/login'>login</NavLink>
            <NavLink className="btn btn-sm btn-outline-info mx-4 bg-secondary border rounded-pill" exact to='/register'>register</NavLink>
        </div>
    )
}

export default NavBar;
