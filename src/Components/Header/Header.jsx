import React,{useState} from "react";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';




function Header(){

  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);


    switch (selectedOption) {
      case '2':
        navigate('/rawenclaw');
        break;
      case '3':
        navigate('/hufflepuff');
        break;
      case '4':
        navigate('/slytherin');
        break;
      case '5':
        navigate('/gryffindor');
        break;
      default:
        break;
    }
  };


    return (
        <div className="Header">

            <div className="content">
            

  
               <Link to="/" className='nav_link'>
                <p className='links_word'> Main </p>
              </Link>
              <Link to="/search" className='nav_link'>
                <p className='links_word'> Search </p>
              </Link>
                  <Link to="/staff" className='nav_link'>
                <p className='links_word'> Staff </p>
              </Link>
              <select className='select_nav' name="user_profile_color_1" onChange={handleSelectChange} value={selectedValue}>
                <option value="1" default>faculties</option>
                <option value="2">Rawenclaw</option>
                <option value="3">Hufflepuff</option>
                <option value="4">Slytherin</option>
                <option value="5">Gryffindor</option>
              </select>
              
              
        
              <Link to="/about" className='nav_link'>
                <p className='links_word'> About </p>
              </Link>
          

                </div>
        </div>
    );
}

export default Header;