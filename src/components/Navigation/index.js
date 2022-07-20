import React from "react";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navigation = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap px-1 md:fixed md:top-0 md:w-full">
        <div className="flex flex-wrap items-center w-full">
          <div className="w-full relative flex justify-end">
            <button
              className="cursor-pointer px-1 py-1 mx-1 my-1 block md:hidden absolute"
              id="hamburger"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <Icon icon="fe:app-menu" height='30'/>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger">

            <ul className="flex flex-col pt-10 md:pt-0 items-center justify-end md:h-16 md:flex-row list-none lg:ml-auto w-full">

              <li className="nav-item mx-3">
                <Link to="/" className="px-3 pb-2 md:py-1 flex">
                  <span>ABOUT</span>
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link to="/" className="px-2 py-2 md:py-1 flex">
                  <span>CONTACT</span>
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link to='/portfolio' className="px-3 py-2 md:py-1 flex">
                  <span>PORTFOLIO</span>
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link to='/' className="px-3 pt-2 md:py-1 flex">
                  <span>RESUME</span>
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;