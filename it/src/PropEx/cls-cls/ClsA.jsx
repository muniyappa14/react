 // 1st step import react from "react"
 //import the page which we want to send the data 
 //class extends to react.component
 import React from "react";
 import ClsB from "./ClsB";
 class ClsA extends React.Component{ 
      colors=["yellow","green","pink"]
       name="asian paints"
       price="5000,6000"
      render(){
        return <div>
        <ClsB colors={this.colors} name={this.name} price={this.price} />
        </div>
        }
}
export default ClsA