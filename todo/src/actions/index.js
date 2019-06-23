export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export function add(newTodo) {
  return {
    type: ADD,
    payload: newTodo
  };
}

export function toggle(id) {
  return {
    type: TOGGLE,
    payload: id
  };
}
