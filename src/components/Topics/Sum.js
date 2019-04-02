import React, {Component} from "react"

class Sum extends Component {
  
  constructor() {
    super() 

    this.state = {
      number1: 0, 
      number2: 0, 
      sum: null

    }
  }
  

  updateValue= (val) => {
    this.setState({
      number1: val
    })
    console.log(val)
  }

  updateValue2= (val) => {
    this.setState({
      number2: val
    })
    console.log(val)
  }

  
  summer= () => {
    let num1= Number(this.state.number1)
    let num2= Number(this.state.number2)

    this.setState({
      sum: num1+num2,
    })
  }



  render(){
    return(
      <div className="puzzleBox sumPB">
      
      <h4> Sum</h4>
      <input type="number" className="inputLine" onChange={(e)=> {
        this.updateValue(e.target.value)
      }}/>
      <input type="number" className="inputLine" onChange={(e)=> {
        this.updateValue2(e.target.value)
      }}/>
      <button className="confirmationButton" onClick={()=>{
        this.summer()
      }}>Hey there!</button>
      <span className="resultsBox">{`${this.state.sum}`}</span>
      
      
      </div>
    )
  }
}


export default Sum 