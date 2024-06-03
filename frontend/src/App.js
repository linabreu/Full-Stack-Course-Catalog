import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchTermContextProvider } from './contexts/SearchTermContext';
import HomePage from './pages/HomePage';
import AllResults from './pages/AllResults';
import SearchResult from './pages/SearchResult';
import HeroImage from './components/HeroImage/HeroImage';
import Navigation from './components/Navigation';
import Footer from './components/Footer/Footer';
import { SearchTermContext } from './contexts/SearchTermContext';



function App() {

    return (
        <div>
            <SearchTermContextProvider>
                <Navigation></Navigation>
                <HeroImage></HeroImage>
                <Routes>
                    <Route path ="/" element={<HomePage/>}></Route>
                    <Route path ="all_courses" element={<AllResults/>}></Route>
                    <Route path ="result" element={<SearchResult />}></Route>
                </Routes>
                <Footer></Footer>
            </SearchTermContextProvider> 
        </div>
    );
}
export default App;
