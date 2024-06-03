import React from 'react';
import Tips from '../Tips.jsx/Tips';

function CenterContent() 
{
  return (
    <div>
        <div className = "w-10/12 m-auto">
            <h1 className = "text-4xl mt-5 mb-5 font-bold brand-font">Find a Class</h1>
            <p className = "mb-5">Use the form above to search for classes then add classes to your schedule in the Student Center.</p>

            <div className = "h-[150px] mb-10 bg-yellow-200 md:h-[95px] outline outline-2 outline-amber-300 rounded">
                <p className = "pt-5 pl-4 pr-3">Beginning in the Fall 2024 semester, all new degree-seeking students will be required to take a First Year Experience (FYE) course. Discover which one is right for you!</p>
            </div>
            <Tips></Tips>
        </div>
    </div>
  )
}

export default CenterContent