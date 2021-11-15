export const useStateCode = `

import React, { useState } from 'react';

function UseState(props) {
  const [counter, setCounter] = useState(0);

  const plusCount = () => {
    // console.log('Hit Plus Count...');
    setCounter((prevCount) => prevCount + 1);
  };

  const minusCount = () => {
    // console.log('Hit Minus Count...');
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Use Effect Example</h1>
      <hr />
      <button onClick={minusCount} className='btn btn-primary mr-4'>
        -
      </button>
      <span className='display-3'>{counter}</span>
      <button onClick={plusCount} className='btn btn-primary ml-4'>
        +
      </button>
    </div>
  );
}

UseState.propTypes = {};

export default UseState;

`;
