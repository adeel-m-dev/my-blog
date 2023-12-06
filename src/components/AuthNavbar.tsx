import React from "react";
import { Link } from "react-router-dom";

export default function AuthNavbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              className='text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
              to='/'
            >
              My Blog
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='16'
                width='14'
                viewBox='0 0 448 512'
                className='text-white fill-current'
              >
                <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='#'
                >
                  <i className='lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2' />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <button
                  className='bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                  type='button'
                >
                  <i className='fas fa-arrow-alt-circle-down'></i> Login
                </button>
              </li>

              <li className='flex items-center'>
                <button
                  className='bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                  type='button'
                >
                  <i className='fas fa-arrow-alt-circle-down'></i> Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
