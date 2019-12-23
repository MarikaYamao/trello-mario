import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Card = () => {
  const [content, setContent] = new useState('aaa')
  const [mode, setMode] = new useState('p')
  const changedContentHandler = (e) => setContent(e.target.value)
  var element = null
  switch (mode) {
    case 'p':
      element = <p onDoubleClick={ () => setMode('input') }>{content}</p>
      break;
    case 'input':
      element = <input type="text" autoFocus="focus" value={content}
                onChange={ changedContentHandler }
                onKeyDown={ e => { if(e.keyCode === 13) setMode('p') }} 
                onBlur={ () => setMode('p') }
                />
      break;
  }
  return (
    <div className="cardItem">
      {element}
    </div>
    )
}

export default Card