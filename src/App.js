import './App.css';
import React, { useState, useEffect } from 'react'

import StaticContext from './context/StaticContext';
import Characters from './components/Characters';
import { fetchAllChars } from './functions/characterUtils'

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [characters, setCharacters] = useState([])
  const [charactersInfo, setCharactersInfo] = useState({})


  /*useEffect(() => {
    let loading = true;
    fetchAllChars(setCharacters,setCharactersInfo);
  
    return () => {
      second
    }
  }, [])*/

  useEffect(() => {
    fetchAllChars(setCharacters, setCharactersInfo, setIsLoading, setHasError)
  }, [setCharacters, setCharactersInfo]);
  //setCharacters, setCharactersInfo] 


  return (
    <StaticContext.Provider value={{ characters: characters, charactersInfo: charactersInfo }}>
      <div className='container'> 
      {isLoading && <h3>Loading ...</h3>}
      {!isLoading && <Characters characters={characters} />}
      </div>
    </StaticContext.Provider>);
}

export default App;
