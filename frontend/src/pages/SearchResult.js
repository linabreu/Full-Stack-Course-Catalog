import React from 'react';
import  { useContext } from 'react';
import SearchResultsContents from '../components/SearchResultContents/SearchResultsContents';
import { SearchTermContext } from '../contexts/SearchTermContext';




function SearchResult() 
{
const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
  return (
    <div>
        <div>
        <SearchResultsContents headline = "Search Results" term= {searchTerm}></SearchResultsContents>
    </div>
    </div>
  )
}

export default SearchResult