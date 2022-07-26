import './App.css';
import React, { useState, useEffect } from 'react'
import StaticContext from './context/StaticContext';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';
import { fetchChars } from './functions/characterUtils'

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [characters, setCharacters] = useState([])
  const [charactersInfo, setCharactersInfo] = useState({})
  const [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    const contextSetters = {
      setCharacters,
      setCharactersInfo,
      setIsLoading,
      setHasError,
      setCurrentUrl
    }
    fetchChars(null, contextSetters)
  }, [setCharacters, setCharactersInfo]);

  return (
    <StaticContext.Provider value={{
      currentUrl: currentUrl,
      setCurrentUrl: setCurrentUrl,
      characters: characters,
      setCharacters: setCharacters,
      info: charactersInfo,
      setCharactersInfo: setCharactersInfo,
      isLoading: isLoading,
      setIsLoading: setIsLoading,
      hasError: hasError,
      setHasError: setHasError
    }}>
      <Navbar />
      <div className='container'>
        {isLoading && <h3>Loading ...</h3>}
        {!isLoading &&
          <>
            <Pagination />
            <Characters />
            <Pagination />
          </>
        }
      </div>
    </StaticContext.Provider>);
}

export default App;
