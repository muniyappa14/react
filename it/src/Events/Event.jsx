import React from "react";
class Event extends React.Component{
state={
    message:"today",

    }
handler=(x)=>{
    this.setState({message:x})
}
render(){
    return<div>
        <h1>event handling:{this.state.message}</h1>
        <button className="btn-secondary" onClick={this.handler.bind(this,"hello good morning")}>GM</button>&nbsp;
        <button className="btn-danger" onDoubleClick={this.handler.bind(this,"hello GA")}>GA</button>&nbsp;
        <button className="btn-success" onClick={this.handler.bind(this,"very gn")}>GN</button>

    </div>
}

}
export default Event