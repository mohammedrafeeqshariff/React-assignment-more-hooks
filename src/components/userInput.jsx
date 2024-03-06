// TodoApp.jsx

import React, { useReducer, useRef } from 'react';
import TodoItem from './todoItem';


let initialState = [];

function TodoApp() {
  const [todoData, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'ENTER_DATA':
        return [...state, { data: action.payload }];

      case 'HIDE_DATA':
        return state.map((e, i) =>
          i === action.payload ? { ...e, isHidden: !e.isHidden } : e
        );

      default:
        return state;
    }
  }

  console.log(todoData);

  const returnedReference = useRef('rough');
  return (
    <div className="todo-app">
      <div>
        <input
          type="text"
          placeholder="Enter your todo"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              dispatch({ type: 'ENTER_DATA', payload: e.target.value });
              returnedReference.current.value = ''; // Clear the input after adding todo
            }
          }}
          ref={returnedReference}
        />
      </div>

      <div>
        {todoData.map((ele, i) => (
          <TodoItem ele={ele} key={i} index={i} dispatch={dispatch} />
        ))}
      </div>
      <button onClick={() => returnedReference.current.focus()}>
        Go back to top
      </button>
    </div>
  );
}

export default TodoApp;
