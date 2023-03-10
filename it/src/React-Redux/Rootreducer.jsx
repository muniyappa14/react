import {combineReducers} from "redux"
import {reducer} from "./View.reducer"
 let rootreducer=combineReducers( {message:reducer})
 export {rootreducer}