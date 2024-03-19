import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  let [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;



// import './App.css';
// import Header from './components/Header';
// import CounterClass from './components/CounterClass';
// import CounterFunction from './components/CounterFunction';
// import { useState } from 'react';

// function App() {
//   let [counter, setCounter] = useState(0)
//   let [showInput, setShowInput] = useState(false)
//   const increaseCounter = ()=>{
//     console.log('increase Function')
//     setCounter(counter+=1)
//   }

//   // const name = "Max"
//   const classRed = "red"
//   return (
//     <div className="App">
//       <Header></Header>
//       <button onClick={()=>setShowInput(!showInput)}>{showInput ? 'Скрыть' : 'Показать'}</button>
//       {/* {showInput && <CounterClass>Vasya</CounterClass>} */}
//       {showInput &&       <CounterFunction counter={counter} increaseCounter={increaseCounter}>Hello</CounterFunction>}
//       <header className={classRed}>
//       </header>
//     </div>
//   );
// }

// export default App;
