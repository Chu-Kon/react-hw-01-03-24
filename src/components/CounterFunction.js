import React, { useEffect, useState } from 'react'

export default function CounterFunction({name, children}) {
    if(!name){
        name = 'default Name'
    }

   
    let [text, setText] = useState('')
    let [counter, setCounter] = useState(0)
    let [showInput, setShowInput] = useState(false)

    // const increaseCounter = ()=>{
    //     console.log('increase Function')
    //     setCounter(counter+=1)
    // }

    const handleInput = (event)=>{
        setText(event.target.value)
    }
    // useEffect(()=>{
    //   console.log('Монтирование')
    // }, [])

    // useEffect(()=>{
    //   console.log('Был увеличен счетчик')
    // }, [counter])

    useEffect(()=>{
      console.log('Был увеличен счетчик')
      return ()=>{
        console.log('Компонент размонтирован')
      }
    }, [counter])

    useEffect(()=>{
      console.log('Был введен текст')
    }, [text])

  return (
    <div>
      <p>Counter Component</p>
      <input type='text' onInput={(event)=>handleInput(event)}></input>
      {/* <p>{counter}</p> */}
      <button onClick={()=>setCounter(counter+=1)}>Плюс счетчик</button>
    </div>
  )
}
