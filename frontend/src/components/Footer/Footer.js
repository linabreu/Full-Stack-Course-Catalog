import React from 'react';
import logo from '../../images/logo.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() 
{
  return (
    <div>
    <footer className="bg-green-950 mt-5">
    <div className="mx-auto max-w-screen-xl">
      <div className="m-auto grid md:grid-cols-3 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-3">
        <div>
            <ul className="text-white font-light text-center">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Campus Map</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Request Information</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Future Students</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Apply Now</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Tuition FAQ</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Financial Aid</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white font-light text-center">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Governing Board</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Employees</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Annual Notifications</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Non-Discrimination Statement</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Buget Information</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white font-light text-center">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Career Training</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Doing Business with Us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Consumer Information</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Disclaimer</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Student Handbook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Accessibility</a>
                </li>
            </ul>
        </div>
    </div>
        <div className="px-2 py-2 flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <div className = "flex">
                <img src = {logo} className = "w-[50px]"></img>
                <p className = "text-white brand-font text-2xl mt-2">Cactus College </p>
            </div>
            <FaSquareFacebook className = "text-white mt-4" fontSize={20}/>
            <FaTwitter className = "text-white mt-4" fontSize={20}/>
            <FaInstagram className = "text-white mt-4" fontSize={20}/>
            <FaLinkedin className = "text-white mt-4" fontSize={20}/>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer