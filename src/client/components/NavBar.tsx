import React from 'react';
import { NavLink } from 'react-router-dom';
import RootLayout from './RootLayout';

const NavBar = () => {
    return (
        <RootLayout>
            <NavLink className="btn btn-sm btn-outline-info mx-2" to='/'>home</NavLink>
            <NavLink className="btn btn-sm btn-outline-info mx-2" to='/books'>books</NavLink>
            <NavLink className="btn btn-sm btn-outline-info mx-2" to='/login'>login</NavLink>
            <NavLink className="btn btn-sm btn-outline-info mx-2" to='/register'>register</NavLink>
        </RootLayout>
    )
}

export default NavBar;
