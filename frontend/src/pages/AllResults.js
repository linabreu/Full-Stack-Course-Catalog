import React from 'react'
import Navigation from '../components/Navigation';
import HeroImage from '../components/HeroImage/HeroImage';
import SearchResultsContents from '../components/SearchResultContents/SearchResultsContents';
import Footer from '../components/Footer/Footer';

function AllResults() 
{
  return (
    <div>
        <SearchResultsContents headline = "All Courses" term=""></SearchResultsContents>
    </div>
  )
}

export default AllResults