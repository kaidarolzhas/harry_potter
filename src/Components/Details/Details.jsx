import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Details.css';
import ErrorBoundary from "./ErrorBoundary";
import Info from "./Info";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [data,setData] = useState();
  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://hp-api.onrender.com/api/character/${id}`
      );
      const data = await response.json();
      console.log(data);
    
      setData(data)
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div>
     
      <ErrorBoundary>
        {error ? (
          <div>{error.message}</div>
        ) : (
          <Info data={data} />
        )}
      </ErrorBoundary>
      <button className="btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Details;
