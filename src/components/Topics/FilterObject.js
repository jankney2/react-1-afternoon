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


  // filterObj = (input) => {
  
  //   this.setState({
  //     filteredArray: this.state.unFilteredArray.filter((element)=>{
  //       return element.input === this.state.input
  //     })
  //   })   

  filterObj(prop) {
    var employees = this.state.unFilteredArray;
    var filteredEmployees = [];
    
    for ( var i = 0; i < employees.length; i++ ) {
      if ( employees[i].hasOwnProperty(prop) ) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredArray: filteredEmployees });
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
      <span className="resultsBox filterObjectRB"  >{`${this.state.filteredArray}`}</span>


    </div>
  )
}
}


export default FilterObject