import React, { useEffect, useState } from 'react'
import ListElement from './ListElement'
import ListItem from './ListItem'

export default function TodoList() {
    const[list, setList] = useState([])

    const getData = async()=>{
        const arr = []
        let data = await import('./dataBase.json')
        for(let i=0; i<data.length; i++){
            arr.push(data[i])
        }
        setList(arr)
    }

    useEffect(()=>{
        getData()
    },[])

    const deleteItem = (id)=>{
        // console.log(id)
        const newList = list.filter(item=>item.id!==id)
        setList(newList)
        // console.log(newList)
    }

    const toggleDone = (id) => {
        const updatedList = list.map((item) =>
        item.id === id ? { ...item, done: item.done ? false : true } : item
        )
        setList(updatedList)
    }

    const addItemToList = (newItem) => {
        setList([...list, newItem])
        console.log(newItem)
    }

    return (
        <div>
            <h1>TodoList</h1>
            <ListItem addItem={addItemToList}></ListItem>
            {list.map(item => <ListElement item={item} deleteItem={deleteItem} toggleDone={toggleDone} key={item.id}></ListElement>)}
        </div>
    )
}