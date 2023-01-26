"use client";

import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            <span className=" text-green-500">Biruwa</span>pasal
          </span>
        </a>

        <div className=" w-auto md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-row justify-center items-center lg:space-x-5 space-x-2 mt-0  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li className={`${isOpen ? "block" : "hidden"} lg:block`}>
              <a
                href="/"
                className="rounded md:bg-transparent md:text-green-700 md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className={`${isOpen ? "block" : "hidden"} lg:block`}>
              <a
                href="/seeds"
                className="  md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 "
              >
                Seeds
              </a>
            </li>
            <li className={`${isOpen ? "block" : "hidden"} lg:block`}>
              <a
                href="/blog"
                className="  md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 mr-2 lg:mr-0 "
              >
                Blog
              </a>
            </li>
            <div className="flex flex-row lg:space-x-3 space-x-2 text-base">
              <li>
                <a
                  href="#"
                  className="  md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 "
                >
                  <AiOutlineSearch />
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="  md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 "
                >
                  <AiOutlineUser />
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="  md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 "
                >
                  <AiOutlineShoppingCart />
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="lg:hidden md:hidden md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 "
                >
                  <AiOutlineMenu />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
