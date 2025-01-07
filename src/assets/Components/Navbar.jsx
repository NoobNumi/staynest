import React, { useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar flex flex-col lg:flex-row items-center justify-between flex-wrap p-6">
      <div
        className="flex flex-row lg:flex-col justify-between items-center p-0 gap-9 w-full lg:w-auto"
        id="logoMenu"
      >
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="/home">
            <img
              src={logo}
              className="object-cover w-40 md:w-60 py-3"
              alt="Logo"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <div className="bg-white h-full p-6">
          <button
            className="absolute top-4 right-4 text-gray-800"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 hover:text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="text-sm flex flex-col gap-4">
            <li className="my-3">
              <a
                href="#home"
                className="text-slate-800 hover:text-blue-500 font-medium"
              >
                Home
              </a>
            </li>
            <li className="my-3">
              <a
                href="#about"
                className="text-slate-800 hover:text-blue-500 font-medium"
              >
                About
              </a>
            </li>
            <li className="my-3">
              <a
                href="#rooms"
                className="text-slate-800 hover:text-blue-500 font-medium"
              >
                Rooms
              </a>
            </li>
            <li className="my-3">
              <a
                href="#testimonials"
                className="text-slate-800 hover:text-blue-500 font-medium"
              >
                Testimonials
              </a>
            </li>
            <li className="my-3">
              <a
                href="#faqs"
                className="text-slate-800 hover:text-blue-500 font-medium"
              >
                FAQs
              </a>
            </li>
            <li className="my-3">
              <a
                href="#blogs"
                className="text-slate-800 hover:text-blue-500 font-medium"
              >
                Blogs
              </a>
            </li>
            <li className="my-3">
              <a
                href="#contact"
                className="text-slate-800 hover:text-blue-700 hover:font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn primary-btn font-medium py-4 px-11 rounded-full">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-full flex-grow items-center lg:w-auto">
        <ul className="text-sm flex flex-row justify-center lg:flex-grow gap-9">
          <li>
            <a
              href="#home"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-blue-500 font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-blue-500 font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#rooms"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-blue-500 font-medium"
            >
              Rooms
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-blue-500 font-medium"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-blue-500 font-medium"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-blue-500 font-medium"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-blue-700 font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
        <div>
          <button className="btn primary-btn font-medium py-3 px-11 rounded-full mt-4 lg:mt-0">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
