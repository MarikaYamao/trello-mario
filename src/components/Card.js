import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useDrag } from 'react-dnd'

const Card = () => {
  const [content, setContent] = new useState('aaa')
  const [mode, setMode] = new useState('p')
  const [{isDragging}, drag] = useDrag({
    item: { type: 'card' },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })
  
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
    <div className="cardItem" ref={drag}>
      {element}
    </div>
    )
}

export default Card