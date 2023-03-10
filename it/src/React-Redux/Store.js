 import {createStore} from "redux"
import { rootreducer } from "./Rootreducer"
import { composeWithDevTools} from "redux-devtools-extension"
  let store=createStore(rootreducer, composeWithDevTools)
  export {store}