import React from 'react';

/**
 * Custom context for storing states and response data for being rehused as globals.
 */
const Context = React.createContext({
    currentUrl: null,
    setCurrentUrl:null,
    characters: [],
    setCharacters: null,
    info: {},
    setCharactersInfo: null,
    isLoading: null,
    setIsLoading: null,
    hasError: null,
    setHasError: null
})

export default Context;