import React, { useState } from 'react'

const Card = () => {
  const [content, setContent] = new useState('')
  const dblclick = () => {
    let parent = this.parentNode
    parent.replaceChild(input, p)
    input.focus()
  }
  const keyDown = (e) => {
    if(e.keyCode === 13){
      let parent = this.parentNode
      setContent(this.value)
      parent.replaceChild(p, this)
    }
  }
  const blur = () => {
    let parent = this.parentNode
    setContent(this.value)
    parent.replaceChild(p, this)
  }
  const input = <input type="text" value={content} onkeydown={keyDown()} onblur={blur()}/>
  const p = <p ondblclick={dblclick()}>{content}</p>
  return (
    <div>
      {p}
    </div>
    )
}

export default Card