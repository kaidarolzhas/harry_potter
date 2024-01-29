
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/List/HarryPotterCharacters';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Components/Details/Details';
import Staff from './Components/Staff/Staff';
import Gryffindor from './Components/Gryffindor/Gryffindor';
import HarryPotterCharacters from './Components/List/HarryPotterCharacters';
import Slytherin from './Components/Slytherin/Slytherin';
import Hufflepuff from './Components/Hufflepuff/Hufflepuff';
import Rawenclaw from './Components/Rawenclaw/Rawenclaw';
import MyQuotes from './Components/MyQuotes/MyQuotes'
import Search from './Components/Search/Search'
function App() {

  const [index, setIndex]=useState('');
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/characters" element={<HarryPotterCharacters />} />
          <Route path="/search" element={<Search />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/gryffindor" element={<Gryffindor />} />
          <Route path="/slytherin" element={<Slytherin />} />
          <Route path="/hufflepuff" element={<Hufflepuff />} />
          <Route path="/rawenclaw" element={<Rawenclaw />} />
        <Route path="/about" element={<MyQuotes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
