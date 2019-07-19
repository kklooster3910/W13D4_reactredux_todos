import React from 'react';
import ToDoListContainer from './todos/todo_list_container'
import { connect } from 'react-redux';
import { receiveToDo } from '../actions/todo_actions'

class App extends React.Component {
    constructor(){
        super()
        this.state = {};
    }

    render(){
        // console.log(connect)
        debugger;
        return (
            <div>
                <ToDoListContainer />
            </div>
        )
    };
}

const mapStateToProps = state => ({
    todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveToDo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
