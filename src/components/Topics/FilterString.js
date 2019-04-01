import React, { Component } from "react"



class FilterString extends Component {

  constructor() {
    super()

    this.state = {
      unfilteredArray: ["hello", "hello my name is", "my hello name", "farts", "another thing", "hello again"],
      userInput: '',
      filteredArray: []
    }
  }



  changeValue = (val) => {
    this.setState({
      userInput: val,
    })
    console.log(val)
  }


  searchString = (arr) => {
    //if the user input value is contained in the index of the passed in array, filter it in to a new array that is displayed in the span 
    
    let newArr = arr.filter((element) => {
      return element.search(this.state.userInput)
    })

    this.setState({

      filteredArray: newArr


    })
  }



  render() {
    return (
      <div>

        <h4>Filter String</h4>
        <div className="puzzleBox filterStringPB">
        <span className="puzzleText">{`${this.state.unfilteredArray}`}</span>
        <input type="text" className="inputLine" onChange={(e) => {
          this.changeValue(e.target.value)
        }}></input>
        <span className="resultsBox FilterStringPB">{this.state.filteredArray}</span>
        <button className="confirmationButton" onClick={() => {
          this.searchString(this.state.unfilteredArray)
        }}>button</button>
        </div>
      </div>

    )
  }
}



export default FilterString