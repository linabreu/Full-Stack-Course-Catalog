import React, { useContext } from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import "./SearchResultsContent.css";
import { SearchTermContext } from '../../contexts/SearchTermContext';
import Tips from '../Tips.jsx/Tips';

function SearchResultsContents(props) {

    const headline = props.headline;
    const term = props.term
    const { clicks, setClicks } = useContext(SearchTermContext);
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(`/api//cactus_college/course?name=${term}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          setData(data);
        });
    }, [clicks]);

    const NoResults = () =>
    {
      return <div>
        <p className = "mb-10">No classes found matching your search! Please revise your search and try again!</p>
        <Tips></Tips>
      </div>
    }
    const DataResults = () =>
    {
      return <div>
      {data.map(course => (
        <div key={course.courseId}>
        <div className = "md:hidden lg:hidden">
            <h2 className = "text-xl font-semibold mb-5 bold">{course.courseName}</h2>
        </div>

        <div className = "hidden md:flex lg:flex">
            <h2 className = "text-xl font-semibold mb-5 bold">{course.courseName}</h2>
            <h2 className = "text-2xl font-light mb-5 bold"> - {course.credits} Credits</h2>
        </div>

        <p>{course.courseDesc}</p>

         {/*different layout for mobile*/}
        <div className = "md:hidden lg:hidden">
        {course.sections.map(section =>
        <div className = "mt-5 grid grid-cols-2 gap-0" key = {section.Id}>
          <div><p className = "pt-2 pb-2 bg-slate-200 font-semibold">Section#</p></div>
          <div><p className = "pt-2 pb-2 mb-2 bg-slate-200 ">{section.sectionId}</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "font-semibold">Credits</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "mb-2">{course.credits}</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "font-semibold">Location</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "mb-2">{section.room}</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "font-semibold">Delivery</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "mb-2 ">{section.delivery}</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "font-semibold">Dates</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "mb-2 ">{section.dates}</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "font-semibold">Days</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "mb-2 ">{section.day}</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "font-semibold">Times</p></div>
          <div className = "border-slate-100 border-b-2"><p className = "mb-2 ">{section.time}</p></div>
          <div ><p className = "font-semibold">Instructor</p></div>
          <div ><p className = "mb-10 ">{section.instructorName}</p></div>
        </div>
         )}
        </div>
         {/*different layout for medium and large screens*/}
        <div className = "hidden md:grid grid-cols-7 gap-4 mt-5 mb-5 bg-slate-200 h-[50px] border-slate-400 border-y-2 lg:md:grid grid-cols-7 gap-4 mt-5 mb-5 bg-slate-200 h-[50px] border-slate-400 border-y-2">
            <div className = "ml-3 mt-3 text-center font-semibold">Section#</div>
            <div className = "mt-3 text-center font-semibold">Location</div>
            <div className = "mt-3 text-center font-semibold">Delivery</div>
            <div className = "mt-3 text-center font-semibold">Dates</div>
            <div className = "mt-3 text-center font-semibold">Days</div>
            <div className = "mt-3 text-center font-semibold">Times</div>
            <div className = "mt-3 text-center font-semibold">Instructor</div>
            <div className = "mt-3 text-center font-semibold"></div>
        </div>
        {course.sections.map(section =>
        <div key = {section.Id}>
            <div className = "hidden md:grid grid-cols-7 gap-4 mt-5 mb-5 h-[50px] border-b-2 border-slate-100 lg:md:grid grid-cols-7 gap-4 mt-5 mb-5 h-[50px] border-b-2 border-slate-100">
            <div className = "ml-3 text-center mb-2 ">{section.sectionId}</div>
            <div className = "text-center">{section.room}</div>
            <div className = "text-center">{section.delivery}</div>
            <div className = "text-center">{section.dates}</div>
            <div className = "text-center">{section.day}</div>
            <div className = "text-center">{section.time}</div>
            <div className = "text-center">{section.instructorName}</div>
            <div className = "text-center"></div>
        </div>
        </div>
        )} 
      </div>
    ))}
    </div>
  }
    const LoadingData = () =>
    {
      return <div>
      <div class="loader"></div>
      <p className = "text-lg text-center mt-3">Loading Courses</p>
    </div>
    }

  return (
    <div className = "w-10/12 m-auto">
      <h1 className = "text-4xl mt-5 mb-5 font-bold brand-font">{headline}</h1>
      {data ? (<div>{data.length == 0 ? (<NoResults/>):(<DataResults/>)}</div>):(<LoadingData/>)}
  </div>
  )
}
export default SearchResultsContents