import React, {Component} from 'react'


class ButtonCounter extends Component{

    state = {
      buttonCounter: 0
    }

    incrementButton = () => {
      this.setState(({buttonCounter}) =>({
        buttonCounter: buttonCounter + 1
      }));
    };

    decrementButton = () => {
      //var value gets button counter
      var value = this.state.buttonCounter
      //if statement that checks if value = 0
      if(value === 0){
        alert('Cannot be less than zero')
        //resets value to 0
        return this.state.buttonCounter = 0
      }


      this.setState({
        buttonCounter: this.state.buttonCounter - 1
      })
    }

    render(){
      return(
        <div>
        <h1>{this.state.buttonCounter}</h1>
        <button onClick = {this.incrementButton}>increase</button>
        <button onClick = {this.decrementButton}>decrease</button>
        </div>
      )
    }
}

export default ButtonCounter;
