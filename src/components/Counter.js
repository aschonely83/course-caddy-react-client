//Input text field 
//Submit button with text Click Me! 
//A counter starting at 0 
//1. It has to be its own class component. 
//2. You can render the component on any page anywhere youd like. 
//3. You can google, but you cant google how to make an incrementor button. No walkthroughs, you can google syntax however. 
//4. No redux, only react. 
import React, { Component } from 'react'

class Counter extends Component {
  state = {
    input: '',
    counter: 0    
  }

  handleInput = (e) => {
    this.setState({ 
     input: e.target.value
    })
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + this.state.input.length  
    })
  }

  render() {
    return(
      <div>
        <input className="w-half border p-4 my-4" type="text" onChange={this.handleInput} value={this.state.input} />
        <button onClick={() => this.handleCounter()}>  Click Me! </button>
        <p>{this.state.counter}</p>
      </div>    
    )    
  }    
}

export default Counter;



