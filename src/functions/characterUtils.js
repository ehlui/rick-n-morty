const BASE_URL_ALL_CHARS = "https://rickandmortyapi.com/api/character";

/**
 * Method to consume an api and update our states for each call.
 * When first param is null it fetches a base url URL_ALL_CHARS.
 * 
 * @param {*} url Where to consume our data 
 * @param {*} setCharacters to set our chars
 * @param {*} setCharactersInfo  to set our char response information (prev, next,...)
 * @param {*} setIsLoading  to know if the request is done
 * @param {*} setHasError to know whether we have any problems
 */
const fetchChars = async (url = null, { setCharacters, setCharactersInfo, setIsLoading, setHasError, setCurrentUrl }) => {
    if (!url)
        url = BASE_URL_ALL_CHARS;

    setIsLoading(true);
    setHasError(false);

    const fetchData = async () => {
        setIsLoading(true);
        setHasError(false);

        try {
            const res = await fetch(url);
            const json = await res.json();
            setCharacters(json.results);
            setCharactersInfo(json.info);

        } catch (error) {
            setHasError(true);
        }

        setIsLoading(false);
    };

    fetchData();
    setCurrentUrl(url)

}

export { fetchChars, BASE_URL_ALL_CHARS };