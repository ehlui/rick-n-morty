import React, { useContext } from 'react'
import StaticContext from '../context/StaticContext'
import { fetchChars } from '../functions/characterUtils'

export default function Pagination() {
  const context = useContext(StaticContext)
  const contextStatesSetters = {
    setCharacters: context.setCharacters,
    setCharactersInfo: context.setCharactersInfo,
    setIsLoading: context.setIsLoading,
    setHasError: context.setHasError
  }
  const handleOnPrevious = () => { fetchChars(context.info.prev, contextStatesSetters) }
  const handleOnNext = () => { fetchChars(context.info.next, contextStatesSetters) }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={(context.info.prev == null ? "disabled" : "") + " page-item"}>
          <button className="page-link" onClick={handleOnPrevious}>Previous</button>
        </li>
        <li className={(context.info.next == null ? "disabled" : "") + " page-item"}>
          <button className="page-link" onClick={handleOnNext}>Next</button>
        </li>
      </ul>
    </nav>
  )
}
