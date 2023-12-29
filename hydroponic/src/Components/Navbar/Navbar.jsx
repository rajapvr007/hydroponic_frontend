import React, { useState } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SHOPPING", link: "/shop" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 border border-white border-b-1 border-l-0 border-r-0 border-t-0 z-10">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div
          className="font-semibold text-2xl cursor-pointer flex items-center font-Montserrat 
       text-pink-100"
        >
          {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span> */}
          Hydroponics
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className="text-gray-800 hover:text-white duration-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <Button>Login</Button>
          <Button>Singup</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
