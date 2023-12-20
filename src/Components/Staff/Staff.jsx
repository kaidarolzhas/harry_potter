import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Staff.css';

function Staff() {
  const [staff, setStaff] = useState([]);
  const navigate = useNavigate();

  function handleButtonClick(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = () => {
    fetch('https://hp-api.onrender.com/api/characters/staff')
      .then(response => response.json())
      .then(data => {
        setStaff(data);
        console.log(staff)
      })
      .catch(error => console.log(error));
  };
  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className="harry-potter-staff">
      <div className='HP'>Staff</div>
      <div className="character-container">
        {staff.map(staff => (
          <div className="character-card" key={staff.name}>
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

export default Staff;