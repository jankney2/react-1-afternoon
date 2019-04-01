import React, {Component} from 'react'

class EvenAndOdd extends Component {
 
constructor() {
  super() 
  this.state = {
    evenArray:[],
    oddArray: [],
    userInput:""
  }

}



changeValue= (val) => {
  this.setState({
    userInput: val, 
  })
}

assignEvenAndOdds=(userInput) =>{
  
  let arr= JSON.parse('[' + userInput + ']')

  this.setState({
    
    evenArray: arr.filter(function(element){
      return element % 2===0;
    }),

    oddArray: arr.filter(function(element){
      return element % 2!==0;
    })

  }) 
}

//convert string into array then pass it through 
  render(){
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={(e)=>this.changeValue(e.target.value)} className="inputLine" type="text"/>
        <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Click here</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd