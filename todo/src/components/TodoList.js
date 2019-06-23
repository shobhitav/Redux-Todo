import React from 'react';
import { connect } from 'react-redux';
import { add, toggle } from '../actions';
import './TodoList.css'

const defaultTodo = {value: '', completed: false};

class TodoList extends React.Component {
    state = {
        newTodo : defaultTodo
    };

    handleInputChange = event => this.setState( { newTodo: {...this.state.newTodo, value : event.target.value} } );

    addTodoHandler = event => {
        event.preventDefault();
        this.props.add(this.state.newTodo);
    } 
    render() {
        return (
            <React.Fragment>
                <input 
                    type='text'
                    placeholder='Todo...'
                    onChange={this.handleInputChange}
                />
                <button onClick={this.addTodoHandler}>Add Todo</button>
                <ul>
                    {
                        this.props.todoList.map( (todo, index) => 
                            <li onClick={event => this.props.toggle(index)} className={todo.completed ? 'completed' : 'incomplete'}>{todo.value.value}</li>
                        )
                    }
                </ul>
            </React.Fragment>
        )   
    }  
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
};
  
// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { add, toggle })(TodoList);

