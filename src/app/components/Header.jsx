"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { RiMenu4Line } from "react-icons/ri";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import Logo from "../assets/apexloads 1.png";

// Import GSAP
import { gsap } from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null); // Ref for the header animation
  const menuRef = useRef(null); // Ref for the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Slide in the header from the left
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { x: -100, opacity: 0 }, // Start off the screen from the left
      { x: 0, opacity: 1, duration: 2, ease: "power4.inOut" } // Slide into view
    );
  }, []);

  // Slide in the mobile menu items from the left when the menu opens
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: -200, opacity: 0 }, // Start off the screen from the left
        { x: 0, opacity: 1, duration: 2, ease: "power3.out" } // Slide into view
      );
    }
  }, [isOpen]);

  return (
    <div className="overflow-hidden">
      {/* Small Screen Navbar */}
      <header
        ref={headerRef} // Reference to animate the header
        className="lg:hidden overflow-hidden bg-black text-white py-4 fixed top-0 left-0 w-full z-20"
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image src={Logo} className="w-[210px]" alt="Apex Loads Logo" />
          </div>

          {/* Right Side - User Icon & Hamburger Menu */}
          <div className="flex font-extrabold focus:outline-none items-center space-x-4">
            <GoPerson size={24} style={{ fontWeight: "extrabold" }} />

            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX size={30} /> : <RiMenu4Line size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav
            ref={menuRef} // Reference for the mobile menu animation
            className="bg-black text-white py-4 px-4"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/products" className="hover:text-custom-red">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-custom-red">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-custom-red">
                  Book A Free Demo
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-custom-red">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Large Screen Navbar */}
      <div
        ref={headerRef}
        className="hidden lg:block fixed top-0 left-0 w-full z-20"
      >
        {/* Top Red Header */}
        <div className="bg-custom-red text-white py-2">
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Contact Info */}
            <div className="flex space-x-6 items-center">
              <Link
                href="tel:+2540709677400"
                className="flex items-center space-x-1 hover:underline"
              >
                <FiPhoneCall />
                <span>+254 (0) 709 677 400</span>
              </Link>
              <Link
                href="mailto:info@apexloads.com"
                className="flex items-center space-x-1 hover:underline"
              >
                <FiMail />
                <span>info@Apexloads.com</span>
              </Link>
            </div>

            {/* Login */}
            <div className="flex text-[16px] space-x-6">
              <ul className="flex space-x-6 mr-4">
                <li className="group relative">
                  <Link
                    href="/products"
                    className="flex justify-center items-center hover:underline"
                  >
                    Products <RiArrowDropDownLine />
                  </Link>
                  <ul className="absolute px-5 left-0 hidden group-hover:block bg-custom-red text-white shadow-lg">
                    <li>
                      <Link
                        href="/search-loads"
                        className="block w-full text-nowrap mt-4 hover:text-black"
                      >
                        Search Loads
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/post-a-truck"
                        className="block w-full text-nowrap mt-4 hover:text-black"
                      >
                        Post A Truck
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/eac-profile"
                        className="block w-full text-nowrap mt-4 mb-4 hover:text-black"
                      >
                        EAC Profile
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:underline">
                    Resources
                  </Link>
                </li>
              </ul>
              <Link
                href="/login"
                className="bg-white flex justify-center items-center text-red-600 px-5 py-0 rounded-full hover:bg-gray-200"
              >
                Login <IoMdArrowDropdown />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Black Header */}
        <header className="bg-black text-white py-4">
          <div
            ref={headerRef}
            className=" container mx-auto flex justify-between items-center px-4"
          >
            {/* Logo */}
            <div className="flex items-center justify-between space-x-4">
              <Image src={Logo} alt="Apex Loads Logo" />

              <ul className="flex px-5 space-x-6">
                <li className="group relative">
                  <Link
                    href="/transporters"
                    className="flex justify-center p items-center hover:underline"
                  >
                    Transporters <RiArrowDropDownLine />
                  </Link>
                  <ul className="absolute px-5 left-0 hidden group-hover:block bg-black text-white shadow-lg">
                    <li>
                      <Link
                        href="/search-loads"
                        className="block w-full text-nowrap mt-4 hover:text-custom-red"
                      >
                        Search Loads
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/post-a-truck"
                        className="block w-full text-nowrap mt-4 hover:text-custom-red"
                      >
                        Post A Truck
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/eac-profile"
                        className="block w-full text-nowrap mt-4 mb-4 hover:text-custom-red"
                      >
                        EAC Profile
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/ful-service-broker" className="hover:underline">
                    Full Service Broker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/freight-forwarders-brokers"
                    className="hover:underline"
                  >
                    Freight Forwarders/Brokers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <nav className="relative"></nav>
            <div className="flex space-x-4">
              <Link
                href="/pricing"
                className="bg-white text-custom-red px-4 py-1 flex justify-center items-center rounded-full  text-nowrap hover:bg-gray-200"
              >
                Pricing
              </Link>
              <Link
                href="/book-demo"
                className="bg-custom-red text-white px-4 py-1 flex justify-center items-center rounded-full text-nowrap hover:bg-custom-red/90"
              >
                Book A Demo
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
