import Component2 from "./Component2"
function Component1(){
  let movie_name="avatar 2"
  let director_name="james cameron"
 let type=["3d","2d"]

  return <div>
    <h1>component 1</h1>
    <hr />
    <Component2  movie={movie_name} name={director_name}  version={type}/ >
    
  </div>

}
export default Component1