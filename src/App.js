import React from 'react';
import './App.css';
import Board from './components/Board'


function App() {
  const items = [
        {
          id: 1,
          title: "Hello, React!"
        },
        {
          id: 2,
          title: "Hello, Redux!"
        },
      ]
  const board = items.map(item => <Board key={item.id} title={item.title}/>)
  return (
    <div className="App">
      {board}
    </div>
  );
}

export default App;
