import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

import { connect } from 'react-redux';
import { removeTodo } from '../redux/actions';


const TodoList = ({ todos = [] }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed : text => dispatch (removeTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);