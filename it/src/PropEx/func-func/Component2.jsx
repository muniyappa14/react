function Component2(props){
    return <div>
     <h1>component 2</h1>
<p>{JSON.stringify(props)}</p>
<h1> movie name is :{props.movie}</h1>
<h2>director name:{props.name}</h2>
<p>movie type {props.version[0]}</p>
    </div>

}
export default Component2