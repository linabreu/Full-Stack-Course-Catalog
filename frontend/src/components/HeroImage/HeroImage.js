import React, { useContext } from 'react';
import { useState } from 'react';
import "./HeroImage.css";
import { CiSearch } from "react-icons/ci";
import { IoRefreshOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SearchTermContext } from '../../contexts/SearchTermContext';


function HeroImage() 
{
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm, clicks, setClicks } = useContext(SearchTermContext);



  return (
   <div className = "h-[150px] md:h-[400px] lg:h-[450px] background">
    <div className="layer h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="md:relative">

            <input type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 w-6/10 md:h-12 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none rounded-full" 
              placeholder="Search for classes"/>

            <div className="absolute top-4 right-3">
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>

        </div>

        <div className = "group relative md:mt-0 lg:mt-0">
          <button onClick={() => {navigate("/result"); setClicks(clicks+1)}} 
         
          className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-3 ml-1 mr-1 rounded-full">
            <CiSearch fontSize={20}/>
          </button>
          <div className = "hidden md:bg-gray-900 text-white p-1 rounded text-sm invisible group-hover:visible outline outline-1 lg:md:bg-gray-900 text-white p-1 rounded text-sm invisible group-hover:visible outline outline-1 ">Search</div>
        </div>

        <div className = "hidden md:block group relative mt-7 lg:group relative mt-7 ">
          <button onClick={() => setSearchTerm("")} className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-3 rounded-full mr-1 text-center">
            <IoRefreshOutline fontSize={20}/>
          </button>
          <div className = "bg-gray-900 text-white p-1 rounded text-sm invisible group-hover:visible text-center outline outline-1">Clear</div>
        </div>

        <div className = "group md:mt-0 lg:mt-0">
          <button onClick={() => navigate("/all_courses")} className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-3 rounded-full">
            <IoBookOutline  fontSize={20}/>
          </button>
          <div className = "hidden md:bg-gray-900 text-white p-1 rounded text-sm invisible group-hover:visible text-center outline outline-1 lg:bg-gray-900 text-white p-1 rounded text-sm invisible group-hover:visible text-center outline outline-1">Full Catalog</div>
        </div>

    </div>
   </div>
  )
}

export default HeroImage