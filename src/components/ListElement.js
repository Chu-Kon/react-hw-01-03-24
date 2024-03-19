import React from 'react'

export default function ListElement({item, deleteItem, toggleDone}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" checked={item.done} onChange={() => toggleDone(item.id)}></input>
        <p style={{ textDecoration: item.done ? 'line-through' : 'none'}}>{item.todo}</p>
        <button onClick={()=>deleteItem(item.id)}>X</button>
    </div>
  )
}
