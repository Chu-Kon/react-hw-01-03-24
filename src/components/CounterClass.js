import React, { Component } from 'react'

export default class CounterClass extends Component {
    state = {
        counter: 0,
        text: ''
    }
    componentDidMount(){
      console.log('Я родился')
    }
    componentWillUnmount(){
      console.log('Я ушел')
    }
      
    increaseCounter = ()=>{
        console.log('increase Class')
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleInput = (event)=>{
        this.setState({
            text: event.target.value
        })
    }
  render() {
    return (
      <div>
        <p>CounterClass</p>
        <button onClick={this.increaseCounter}>Плюс счетчик</button>
        <input type='text' onInput={(event)=>this.handleInput(event)}></input>
      </div>
      
    )
  }
}

CounterClass.defaultProps = {name: 'default text'}
