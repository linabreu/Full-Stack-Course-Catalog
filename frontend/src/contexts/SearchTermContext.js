import React, { createContext, useState } from 'react';

const SearchTermContext = createContext();

const SearchTermContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('Search for classes');
  const [clicks, setClicks] = useState(0);

  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm, clicks, setClicks }}>
      {children}
    </SearchTermContext.Provider>
  );
};

export { SearchTermContext, SearchTermContextProvider };