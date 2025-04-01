import React, { useReducer, useState } from 'react'


const initialState = { todos: [] };

function reducer(state, action) {
    console.log("in the reducer");
  switch (action.type) {
    case 'ADD_TODO':
        {console.log("in add todo");
      return { todos: [...state.todos, action.payload] } };
    case 'DELETE_TODO':
        { console.log("in the delete");
            return { todos: state.todos.filter((_, i) => i !== action.payload) }};
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: input });
    setInput('');
  };

  return (
    <div >
      <input className='bg-blue-400 m-10' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: i })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
