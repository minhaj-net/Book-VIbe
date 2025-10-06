import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <Link to="/">
        <li className="mr-2 text-[#23BE0A] border border-[#23BE0A] px-2 py-1 rounded-md">
          Home
        </li>
      </Link>
      <li className="mr-2 px-2 py-1 text-[#131313] opacity-80">Listed Books</li>
      <Link to="/read">
        <li className="mr-2 px-2 py-1 text-[#131313] opacity-80 ">
          Pages to read
        </li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <h3 className="text-[#131313] font-bold text-lg md:text-2xl  ">
          Book Vibe
        </h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn !mr-2 !bg-[#23BE0A] rounded-xl text-white">Sign in</a>
        <a className="btn !bg-[#59C6D2] rounded-xl text-white">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
