import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gryffindor.css';

function Gryffindor() {
  const [gryffindor, setGryffindor] = useState([]);
  const navigate = useNavigate();

  function handleButtonClick(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    fetchGryffindor();
  }, []);

  const fetchGryffindor = () => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then(response => response.json())
      .then(data => {
        setGryffindor(data);
        console.log(gryffindor)
      })
      .catch(error => console.log(error));
  };
  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className="harry-potter-staff">
      <div className='HP'>Gryffindor</div>
      <div className="character-container">
        {gryffindor.map((staff, index) => (
          <div className="character-card" key={index}>
            <h2 className="character-name">{staff.name}</h2>
            {staff.image.length > 5 ? (
              <img className="character-image" src={staff.image} alt={staff.name} />
            ) : (
              <div className="character-image">
                <p>No image in API</p>
              </div>
            )}
            <button onClick={() => handleButtonClick(staff.id)} className='btn'>More</button>
          </div>
        ))}
      </div>
      <button className="btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Gryffindor;