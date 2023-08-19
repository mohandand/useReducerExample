import React, { useReducer } from 'react';
import reducer from './reducer';

export default function Counter() {
  const intialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: 'Inc' });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Dec' });
        }}
      >
        DEc
      </button>
    </div>
  );
}
