import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/Product.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-opacity-30 shadow-2xl">
      <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-purple-900 ml-4 lg:ml-10">
              Quarkfin
            </div>
          </Link>
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-purple-900 hover:text-purple-700 focus:outline-none focus:text-purple-700"
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <div className={`lg:flex items-center lg:order-2 ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-purple-900" : "text-gray-700"
                    }  hover:bg-yellow-300 lg:hover:bg-transparent lg:border-0 hover:text-purple-800 lg:p-0`
                  }
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solution"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-purple-950" : "text-gray-700"
                    }  hover:bg-yellow-300 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                  }
                >
                  Solution
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/developers"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-purple-950" : "text-gray-700"
                    }  hover:bg-yellow-300 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                  }
                >
                  Developers
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/company"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-purple-950" : "text-gray-700"
                    }  hover:bg-yellow-300 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                  }
                >
                  Company
                </NavLink>
              </li>

              <li>
                <Link
                  to="#"
                  className="text-white bg-purple-900 hover:bg-purple-800 focus:ring-2 focus:ring-purple-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ml-auto"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
