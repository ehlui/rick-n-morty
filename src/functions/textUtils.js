/**
 * Extracting page param from an URL when there's only one param.
 * As we use "?" for make the extraction.
 * 
 * If the url is null it will return 1
 * If the special word {toExtact} is not found it will return 1
 * 
 * @param {*} url Url to be parsed and extract the page param number
 * @returns the current page from the url params
 */

const extractPageNumberFromUrl = (url) => {
    if (url == null)
        return 1

    const toExtract = "page"
    const urlStr = String(url)
    const indexFirstParam = urlStr.indexOf("?")
    const pageNumber = urlStr.substring(indexFirstParam)

    if (!pageNumber.includes(toExtract))
        return 1

    return pageNumber.split("=")[1]
}

export { extractPageNumberFromUrl };