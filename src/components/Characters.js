import React, { useContext } from 'react'
import StaticContext from '../context/StaticContext'

export default function Characters() {
  const context = useContext(StaticContext)
  return (
    <div className='row'>
      {context.characters.map((char, index) => (
        <div key={`${char.name}-${index}}`} className='col'>
          <div className='card'>
            <img src={char.image} alt={char.name} />
          </div>
        </div>
      ))}
    </div>
  )
}
