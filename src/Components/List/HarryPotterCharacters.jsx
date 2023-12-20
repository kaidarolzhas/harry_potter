import React, { useState, useEffect } from 'react';
import './HarryPotterCharacters.css';
import { useNavigate } from "react-router-dom";
import Random from './random';
import Item from './Item'
const HarryPotterCharacters = () => {
  const [characters, setCharacters] = useState([]);




  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="harry-potter-characters">
      
      <div className='bcs'>
        <div className='cont'>
          <h1 className="title">Harry Potter</h1>
          <h4 className="sub_title">The project is designed to take data from the API</h4>
          
        </div>
      </div>

      <div className='HP'>Harry Potter random characters</div>
      <div className='ct'>
        <Random/>
      </div>
      <div className='HP'>Harry Potter All characters</div>
      <div className="character-container">
        {characters.map(character => (
          <Item props ={character}/>
          
        ))}
      </div>
    </div>
  );
};

export default HarryPotterCharacters;

