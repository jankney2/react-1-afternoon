import React, { Component } from "react"



class FilterObject extends Component {


  constructor() {
    super()
    this.state = {
      unFilteredArray: [{
        name: "jacob",
        occupation: 'programmer',
        hobbies: "cycling",

      },
      {
        name: "jacob",
        occupation: 'programmer',
        hobbies: "cycling",

      },
      {
        name: "jacob",
        occupation: 'programmer',
        // hobbies: "cycling", 

      },
      ],
      userInput: "",
      filteredArray: [],
    }

  }


  filterObj = (userInput) => {
    
    // get property names

    //if property name equals 


    this.setState({
      filteredArray: this.state.unFilteredArray.filter((element)=>{
        return element.userInput === this.state.userInput
      })
    })
    
    console.log(this.state.filteredArray) 

}

changeValue = (val) => {
  this.setState({
    userInput: val,
  })
  console.log(val)
}


render() {
  return (
    <div className="puzzleBox filterObjectPB">

      <h4>Filter Object</h4>
      <span className="puzzleText"></span>
      <input className="inputLine" onChange={(e) => {
        this.changeValue(
          e.target.value)
      }} />
      <button className="confirmationButton" onClick={() => { this.filterObj(this.state.userInput) }}>Button!</button>
      <span className="resultsBox filterObjectRB"  ></span>


    </div>
  )
}
}


export default FilterObject