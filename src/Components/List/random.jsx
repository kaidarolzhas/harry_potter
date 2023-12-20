import React from 'react';
import './HarryPotterCharacters.css';
import { useNavigate } from 'react-router-dom';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      randomCharacter: null,
      updateCount: 0 
    };
    this.interval = null;
  }

  componentDidMount() {
    this.fetchCharacters();
    this.interval = setInterval(this.fetchCharacters, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.updateCount !== this.state.updateCount) {
      console.log('Component Updated:', this.state.updateCount);
    }
  }

  fetchCharacters = () => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          characters: data,
          updateCount: prevState.updateCount + 1
        }));
        this.setRandomCharacter(data);
      })
      .catch(error => console.log(error));
  };

  setRandomCharacter = characters => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    this.setState({ randomCharacter: characters[randomIndex] });
  };

  handleButtonClick = id => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    const { randomCharacter } = this.state;

    return (
      <div className="harry-potter-characters">
        {randomCharacter && (
          <div className="character-card" key={randomCharacter.name}>
            <h2 className="character-name">{randomCharacter.name}</h2>
            {randomCharacter.image.length > 5 ? (
              <img className="character-image" src={randomCharacter.image} alt={randomCharacter.name} />
            ) : (
              <div className="character-image">
                <p>No image in API</p>
              </div>
            )}
            <button onClick={() => this.handleButtonClick(randomCharacter.id)} className="btn">
              More
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Random;
