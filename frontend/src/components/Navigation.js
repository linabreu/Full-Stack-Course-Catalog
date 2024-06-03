import React from 'react'
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom";

function Navigation() {

    const navigate = useNavigate();
    return (
        <div>
            <nav className="bg-green-900 text-white py-3 px-4 flex items-center justify-between">
            <div className = "flex">
                <img src = {logo} className = "h-[50px]"></img>
                <a className="mt-1 font-bold text-3xl brand-font cursor-pointer" onClick={() => navigate("/")}>Cactus College </a>
                <a className="mt-1 ml-2 font-thin text-3xl">| Find a Class</a>
            </div>

            </nav>
        </div>
      )
}

export default Navigation