import React from "react"
class Clsss extends React.Component{
    name="muni"
    id="100"
salary="25000"
location="mandya"
render(){
    return(<>
    <h1>class component</h1>
    <div>{JSON.stringify(this.name)}</div>
    </>)
    
}
}
export default Clsss