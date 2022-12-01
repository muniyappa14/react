  
  //1st import react from "react"
   import React from "react"
   //create a class that extends to react component present dependencies(package)
  class Cls1 extends React.Component{
    name="muni"
    id="101"
    salary="25000"
    location="mandya"
//use render method to run the code
    render(){
      return <>
      <h1> {this.name}</h1>
      <h1>{this.id}</h1>
      <h2>{this.salary}</h2>
      <h2>{this.location}</h2>
      <button className="btn btn-primary">click</button>
      </>
    }
  }
  export default Cls1
  //export default class using es6 feature
  //enabling the bootstrap in react page 
  