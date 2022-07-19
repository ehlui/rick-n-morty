const fetchAllChars = async (setCharacters, setCharactersInfo, setIsLoading, setHasError) => {
    const URL_CHARS = "https://rickandmortyapi.com/api/character";
    setIsLoading(true);
    setHasError(false);
    
    const fetchData = async () => {
        setIsLoading(true);
        setHasError(false);
        try {
            const res = await fetch(URL_CHARS);
            const json = await res.json();
            setCharacters(json.results);
            setCharactersInfo(json.info);
    
        } catch (error) {
            setHasError(true);
        }
        setIsLoading(false);
    };

    fetchData();

}

export  {fetchAllChars};