import React from "react"
import FuncB from "./FuncB"
class ClssB extends React.Component{
    train="malgudi express"
    time="12:30"
    render(){
        return <div>
            <h1>this is class to function </h1>
            <FuncB train={this.train} time={this.time} />

        </div>

    }

}
export default ClssB