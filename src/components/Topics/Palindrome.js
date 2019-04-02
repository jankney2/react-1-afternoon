import React, { Component } from "react"


class Palindrome extends Component {
  constructor() {
    super()

    this.state = {
      userInput: "",
      palindrome: "",
    }

  }

  changeValue = (val) => {
    this.setState({
      userInput: val,
    })
  }


pChecker= (input) => {

  //reverse string

  //if new string equals old string, return true 

  let arr= 
  input.split("").reverse().join("").toString()


  if(arr===this.state.userInput){
    this.setState({
      palindrome: "Yes!"
    })
  } else {
    this.setState({
      palindrome: "nope!"
    })
  }

}


  render() {
    return (
      <div>
        <h4>Palindrome</h4>
        <input onChange={(e) => {
          this.changeValue(e.target.value)
        }} />
        <button onClick={()=> {
          this.pChecker(this.state.userInput)
        }}></button>
        <span>{`${this.state.palindrome}`}</span>
      </div>
    )
  }


}


export default Palindrome