export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveToDos = (toDos) => ({
    type: RECEIVE_TODOS,
    todos: toDos
});

export const receiveToDo = (toDo) => ({
    type: RECEIVE_TODO,
    todo: toDo
    
});

window.receiveToDos = receiveToDos;
window.receiveToDo = receiveToDo;