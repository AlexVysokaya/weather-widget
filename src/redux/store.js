import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import {widgetReducer} from './widgetReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  widget: widgetReducer,
  form: formReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));