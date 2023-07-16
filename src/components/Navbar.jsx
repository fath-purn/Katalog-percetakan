import React, { useEffect, useState } from "react";
import axios from "axios";
import "flowbite";
import { Link, Navigate } from "react-router-dom";

import Logo from "../img/logo.png";

const Navbar = (props) => {
  const [query, setQuery] = useState("");

  // css
  const unPages = 
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const halaman =
    "block py-2 pl-3 pr-4 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:p-0 md:dark:text-cyan-500";

  // memunculkan menu dan menutup di mode hp
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
        {/* logo */}
        <a href="/" className="flex items-center">
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
          {/* Search menu */}
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
            {/* inputan */}
            {/* <form onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchData();
              }
            }}> */}
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            {/* </form> */}
          </div>
          {/* hamburger menu */}
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
        {/* Menu utama */}
        <div
          className="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1"
          id="navbar-search"
        >
          {/* Search box */}
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* icon search */}
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
            {/* inputan */}
            {/* <form onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchData();
              }
            }}> */}
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            {/* </form>
            <ul>
              {produks && produks.map((produk) => (
                <li key={produk.id}>
                  <Link href={`/produk/${produk.id}`}>
                    <a>{produk.nama}</a>
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Menu */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className={props.HomeStyle ? halaman : unPages}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/produk"
                className={props.ProdukStyle ? halaman : unPages}
                >
                Produk
              </a>
            </li>
            <li>
              <a
                href="/layanan"
                className={props.LayananStyle ? halaman : unPages}
                >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={props.BlogStyle ? halaman : unPages}
                >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className={props.FAQStyle ? halaman : unPages}>
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
