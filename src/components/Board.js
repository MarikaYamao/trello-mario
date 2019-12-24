import React from 'react'
import List from './List'

const Board = () => {
  const items = [
        {
          id: 1,
          title: "List, React!"
        },
      ]
  const list = items.map(item => <List key={item.id} title={item.title}/>)
  return (
    <div className="boardItem">
      {list}
    </div>
    )
}

export default Board