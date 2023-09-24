import React from 'react'
import logo from '../assets/Logo.png'

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:px-4">
            <div className="flex-1">
                <div className='w-36'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="flex-none hidden md:block ">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Donate</a></li>
                    <li><a>Statistics</a></li>
                </ul>
            </div>
            <div className="dropdown md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 ml-[-50px] z-[1] p-2 shadow bg-base-100 rounded-box max-w-fit">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        </div>
    )
}
