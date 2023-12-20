import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Search.css';


const Search = () => {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const[result, setResult]= useState([]);
  const navigate = useNavigate();

  function handleButtonClick(id) {
    navigate(`/details/${id}`);
  }


  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = () => {
    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
    setResult(filteredCharacters)

    
    console.log(filteredCharacters);
    
  };

  return (
    <div>
      <div className="cnter">
      <input
      className="input_search"
        type="text"
        value={search}
        onChange={event => setSearch(event.target.value)}
        placeholder="Search"
      />
      <button className="search_but" onClick={handleSearch}>Search</button>
      </div > 
      <div className="search_result_container">
        
        {
          result.map((result,index)=>(
            <div key={index}>
              <p>{result.name}</p> 
              <button onClick={() => handleButtonClick(result.id)} className='btn'>More</button>
              <hr  />
            </div>
              
          ))
        }
      </div>
      
    
    </div>
    

  );
};

export default Search;
