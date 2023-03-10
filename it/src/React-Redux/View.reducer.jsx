import {gm,gn} from "./VIew.action"
let initialstate={
    message:"redux page"
}
let reducer=(state=initialstate,action)=>{
    switch(action.type){
        case gm:
            return {message:"hello good morning"}
        case gn:
            return {message:"hello good night"}
        default :
           return state
    }

}
export { reducer}