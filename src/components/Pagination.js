import React, { useContext, useState } from 'react'
import StaticContext from '../context/StaticContext'
import { fetchChars, BASE_URL_ALL_CHARS } from '../functions/characterUtils'
import { extractPageNumberFromUrl } from '../functions/textUtils'

export default function Pagination() {
  const [pageSelected, setPageSelected] = useState('')
  const context = useContext(StaticContext)
  const contextStatesSetters = {
    setCharacters: context.setCharacters,
    setCharactersInfo: context.setCharactersInfo,
    setIsLoading: context.setIsLoading,
    setHasError: context.setHasError,
    setCurrentUrl: context.setCurrentUrl
  }
  const handleOnPrevious = () => {
    fetchChars(context.info.prev, contextStatesSetters)
  }
  const handleOnNext = () => {
    fetchChars(context.info.next, contextStatesSetters)
  }
  const handlePageSelectChange = event => {
    setPageSelected(event.target.value)
  }
  const handlePageSelectClick = event => {
    event.preventDefault()
    if (pageSelected < 1 || pageSelected > context.info.pages)
      return

    let newPageUrl = `${BASE_URL_ALL_CHARS}?page=${pageSelected}`

    if (!newPageUrl || newPageUrl === 0 || newPageUrl === 1)
      newPageUrl = BASE_URL_ALL_CHARS

    fetchChars(newPageUrl, contextStatesSetters)
  }

  return (
    <>
      <form onSubmit={e => { e.preventDefault() }}>
        <div className="row justify-content-center">
          <div class="input-group mb-1 w-25 p-4">
            <div class="input-group-prepend">
              <button onClick={handlePageSelectClick} className="btn btn-outline-secondary" type="button">Go</button>
            </div>
            <input onChange={handlePageSelectChange} title="Numbers only, please." type="number" min="1" step="1" max={context.info.pages} className="form-control mb-2" placeholder="Page" aria-label="Page" />
          </div>
        </div>
      </form>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {context.info.prev &&
            <li className="page-item">
              <button className="page-link" onClick={handleOnPrevious}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
              </button>
            </li>
          }
          {context.info.next &&
            <li className="page-item">
              <button className="page-link" onClick={handleOnNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </button>
            </li>
          }
        </ul>
      </nav>
      <div className='col-xs-1 text-center'>
        <p className='pageCounter'>Page {extractPageNumberFromUrl(context.currentUrl)} of {context.info.pages}</p>
      </div>
    </>
  )
}
