import  imgRick from './img/rick-morty.png'
import { useState } from 'react';
import { Character } from './Components/Character';


function App() {
    const [character, setCharacters] = useState(null);

    const FunctionButton = async()=>{
      const api = await fetch('https://rickandmortyapi.com/api/character');
      const characterApi = await api.json();
      setCharacters(characterApi.results);

  }

  return (
    <div className="App">
      <header className="App-header">
          <h1 className="title">Rick And Morty</h1>
          {character ?(
            <Character character={character} setCharacters={setCharacters} />
          ):(
            <>
              <img src={imgRick} alt='Rick And Morty' className='img-home' />
              <button onClick={FunctionButton} className='btn-search'>Buscar Personajes</button>
            </>
          )  
        }
        </header>
    </div>
  );
}

export default App;
