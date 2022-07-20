const URL_ALL_CHARS = "https://rickandmortyapi.com/api/character";

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
const fetchChars = async (url = null, setCharacters, setCharactersInfo, setIsLoading, setHasError) => {
    if (!url)
        url = URL_ALL_CHARS;

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

}

/**
 * Using the prev value from the response info for fetching data if it has 
 * 
 * @param {*} context Static context for setting up data to show
 */
const onPrevious = (context) => {
    fetchChars(context.info.prev, context.setCharacters,
        context.setCharactersInfo, context.setIsLoading,
        context.setHasError)
}
/**
 * Using the next value from the response info for fetching data if it has 
 * 
 * @param {*} context Static context for setting up data to show
 */
const onNext = (context) => {
    fetchChars(context.info.next, context.setCharacters,
        context.setCharactersInfo, context.setIsLoading,
        context.setHasError)
}

export { fetchChars, onPrevious, onNext };