import React from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 md:w-4/5 mx-auto">
            <div className="flex-1">
                <div className='w-36'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="flex-none hidden md:block ">
                <ul className="flex flex-row gap-4 px-1">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive, isPending }) =>
                                isPending ? "text-black" : isActive ? "text-red-500 underline" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/donations' className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? "text-red-500 underline" : ""}>
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistics' className={({ isActive, isPending }) =>
                            isPending ? " text-black" : isActive ? "text-red-500 underline" : ""}>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="dropdown md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 ml-[-50px] z-[1] p-2 shadow bg-base-100 rounded-box max-w-fit">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive, isPending }) =>
                                isPending ? "text-black" : isActive ? "text-red-500 underline" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/donations' className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? "text-red-500 underline" : ""}>
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistics' className={({ isActive, isPending }) =>
                            isPending ? " text-black" : isActive ? "text-red-500 underline" : ""}>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
