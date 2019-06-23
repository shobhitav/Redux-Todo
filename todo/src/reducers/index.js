import { ADD, TOGGLE } from '../actions';

const initialState = {
  todoList: []
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {
                todoList: [...state.todoList, action.payload ]
            })
        case TOGGLE:
            return Object.assign({}, state, {
                todoList: state.todoList.map(
                    (todo , index)  => index === action.payload ? { ...todo, completed: !todo.completed } : todo
                ) 
            })
    default:
      return state;  
  }
};


