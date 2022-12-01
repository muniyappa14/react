 // 1st step import react from "react"
 //props: is used communicate between two files,and also export the data to another page
import React from "react";
class ClsB extends React.Component{

    render(props){
        return <div>
            <h1>This is class to class</h1>
            <h1>{this.props.name}</h1>
            <h1>{this.props.colors}</h1>
            <p>{this.props.price}</p>
        </div>
    }
}
export default ClsB