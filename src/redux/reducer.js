import { combineReducers } from 'redux';
import articles from './reducers/articles';
import authUser from './reducers/authUser';
import common from '.r/reducers/common';
import { routerReducer } from 'react-router-redux';
 export default combineReducers({
     articles,
     authUser,
     common,
     router: routerReducer
 });
 /** 
  * Here, it uses combineReducers function from redux to combine our      reducers into a single reducer function.
With this combination of reducers into one reducer function, it will be used as an argument to create our store using redux’s createStore function. 
  * 
  */