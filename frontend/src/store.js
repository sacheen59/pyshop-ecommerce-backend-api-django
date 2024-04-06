import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'
import { productListReducers } from './reducers/productReducers'



const reducer = combineReducers({
    productList: productListReducers,   
});

const initialState = {}

const middleware = [thunk]


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;