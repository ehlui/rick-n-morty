import React, { useContext } from 'react'

export default function Characters({ characters = [] }) {
  return (
    <div className='row'>
      {characters.map((char, index) => (
        <div key={`${char.name}-${index}}`} className='col'>
          <div className='card'>
            <img src={char.image} alt={char.name}/>
          </div>
        </div>
      ))}
    </div>
  )
}
