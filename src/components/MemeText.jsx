import React from 'react'

export const MemeText = () => {
  return (
    <div className='meme_text'>
    <h1>Meme</h1>
        <input 
            type="text"  
            placeholder='Text on top'
        />
        <input 
            type="text"  
            placeholder='Text on bottom'
        />
        <button>Generate New Meme</button>
    </div>
  )
}
