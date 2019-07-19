import store from '../store/store';
import rootReducer from '../reducers/root_reducer';
import { RECEIVE_TODO } from "../actions/todo_actions";
import { RECEIVE_TODOS } from "../actions/todo_actions";
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './root'
import configureStore from '../store/store';
import {allTodos} from '../reducers/selectors'

// console.log("stuffs")

window.store = store()
// window.receiveToDos = RECEIVE_TODOS;
// window.store = store

// import { default as alias } from 'my-module';

// import alias from 'my-module';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const rootElement = document.getElementById("main")
    ReactDOM.render(<Root store={store} />, rootElement);
})

