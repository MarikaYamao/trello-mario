import React from 'react'
import Card from './Card'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const List = () => {
  const items = [
        {
          id: 1,
          title: "List, React!"
        },
        {
          id: 2,
          title: "List, Redux!"
        },
      ]
  const card = items.map(item => <Card key={item.id} title={item.title}/>)
  return (
    <DndProvider backend={Backend}>
      <div className="listItem">
        {card}
      </div>
    </DndProvider>
    )
}

export default List