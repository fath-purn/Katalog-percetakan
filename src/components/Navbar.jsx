import React, { useEffect } from "react";
import { Collapse, Dropdown, initTE, Ripple } from "tw-elements";
import Logo from '../img/logo.png';

const Navbar = (props) => {
  useEffect(() => {
    initTE({ Collapse, Dropdown, Ripple });
  }, []);

  return (
    // <!-- Main navigation container -->
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-white py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <!-- Hamburger icon --> */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* <!-- Collapsible navigation container --> */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          {/* <!-- Logo --> */}
          <a
            className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="#"
          >
            <img
              src={Logo}
              className="w-20 h-20"
              alt=""
              loading="lazy"
            />
          </a>
          {/* <!-- Left navigation links --> */}
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row "
            data-te-navbar-nav-ref
          >
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              {/* <!-- Dashboard link --> */}
              <a
                className={props.dashboardStyle}
                href="#"
                data-te-nav-link-ref
              >
                Dashboard
              </a>
            </li>
            {/* <!-- Team link --> */}
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className={props.teamStyle}
                href="#"
                data-te-nav-link-ref
              >
                Team
              </a>
            </li>
            {/* <!-- Projects link --> */}
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className={props.projectStyle}
                href="#"
                data-te-nav-link-ref
              >
                Projects
              </a>
            </li>
            {/* <!-- FAQ --> */}
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className={props.FAQStyle}
                href="#"
                data-te-nav-link-ref
              >
                FAQ
              </a>
            </li>
            {/* <!-- Blog --> */}
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                className={props.blogStyle}
                href="#"
                data-te-nav-link-ref
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Right elements --> */}
        <div className="relative flex items-center">
          <div className="">
            <div className="relative flex w-60 flex-wrap items-stretch mr-4">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />

              {/* <!--Search button--> */}
              <button
                className="relative z-[2] flex items-center rounded-r bg-cyan-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Cart Icon --> */}
          <a
            className="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
          >
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </span>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
