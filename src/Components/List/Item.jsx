import React,{useState} from 'react';
import './HarryPotterCharacters.css';
import { useNavigate } from "react-router-dom";

function Item({props}){
    const navigate = useNavigate();

    function handleButtonClick(id) {
   
        navigate(`/details/${id}`);
    }

    return (
        <div className="character-card" key={props.name}>
            <h2 className="character-name">{props.name}</h2>
            {props.image.length>5?
                        <img className="character-image" src={props.image}></img>
                    
                        :<div className="character-image"> 
                        <p>No image in API</p>
                         </div>
                    }
            
            <button onClick={()=>handleButtonClick(props.id)} className='btn'> <p className='more_text'>More</p> </button>
          </div>
    )
    
}

export default Item;