import React, { useEffect, useState } from "react";
import { Collapse, Dropdown, initTE, Ripple } from "tw-elements";
import "flowbite";

import Logo from "../img/logo.png";

const Navbar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    initTE({ Collapse, Dropdown, Ripple });
  }, []);
  
  const handleSearchChange = (e) => {
    // const value = e.target.value;
    // setSearchValue(value);

    // Perform search logic here, e.g. make an API call or filter data from a database
    // const results = performSearch(value);
    // setSearchResults(results);
  };

  const performSearch = (value) => {
    // Implement your search logic here, e.g. filter data based on the search value
    // Return the filtered results
    // This is just a dummy implementation, replace it with your actual search logic
    // return data.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
  };



  // css
  const unPages =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const pages =
    "block py-2 pl-3 pr-4 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:p-0 md:dark:text-cyan-500";

  function toggleNavbarSearch() {
    const button = document.querySelector('button[data-collapse-toggle="navbar-search"]');
    const navbarSearch = document.getElementById('navbar-search');
  
    if (button && navbarSearch) {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      navbarSearch.classList.toggle('hidden');
    }
  }

  return (
    <nav className="fixed z-50 top-0 w-full bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src={Logo}
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center md:max-lg:hidden lg:inline text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={toggleNavbarSearch}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1"
          id="navbar-search"
        >
          {/* Search box */}
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
            />
            {/* <ul>
              {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>  */}
          </div>

          {/* Menu */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/produk"
                className={props.HomeStyle ? pages : unPages}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/produk"
                className={props.ProdukStyle ? pages : unPages}
                >
                Produk
              </a>
            </li>
            <li>
              <a
                href="/layanan"
                className={props.LayananStyle ? pages : unPages}
                >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={props.BlogStyle ? pages : unPages}
                >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className={props.FAQStyle ? pages : unPages}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
