import React, { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

const initialState = {
  count: 0
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'COUNTER_CLICK':
      return {
        ...state,
        count: payload
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>You clicked {count} times</p>
        <button
          onClick={() => {
            dispatch({
              type: 'COUNTER_CLICK',
              payload: count + 1
            });
          }}
        >
          Click me
        </button>
      </header>
    </div>
  );
}
