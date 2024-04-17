import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const renderLoggedInNavbar = () => {
        return (
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <div className="group cursor-pointer">
                        <Link className="w-10 h-10 rounded-full overflow-hidden bg-gray-300" to="/profile">
                            <img
                                src={user.photoURL || 'https://via.placeholder.com/150'}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full object-cover"

                            />
                        </Link>
                        <span className="absolute -bottom-20 right-0 bg-white border-2 shadow-lg rounded-lg text-black px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            {user.displayName}
                        </span>
                    </div>
                </div>
                <button className="btn" onClick={handleLogOut}>Log Out</button>
            </div>
        );
    };

    const renderLoggedOutNavbar = () => {
        return (
            <Link to="/login">
                <button className="btn">Log In</button>
            </Link>
        );
    };
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">NestSeekersPlace</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? renderLoggedInNavbar() : renderLoggedOutNavbar()}
            </div>
        </div >
    )
}

export default Navbar