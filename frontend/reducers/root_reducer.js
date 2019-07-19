import {combineReducers} from 'redux'
import todosReducer from './todos_reducer.js'

// const rootReducer = (state = {}, action) => {
//     // Object.freeze(state);
//     switch (action.type) {
//         default:
//             return state;
//     }
//     return {
//         todos: todosReducer(state.todos, action)
//     }
// } explict way ---- same thing


const rootReducer = combineReducers({
    todos: todosReducer,
});

// const rootReducer = () => {
//     return {}
// };

export default rootReducer;