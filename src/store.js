import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit"
import reducer from './reducers'
import thunk from "redux-thunk";

const store = configureStore(
    {reducer},
    compose(applyMiddleware(thunk),
        typeof window === 'object' &&
         typeof   window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION__') !==undefined?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
); 

export default store;