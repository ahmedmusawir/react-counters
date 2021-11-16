import React, { useState } from 'react';
import { CopyBlock, atomOneLight } from 'react-code-blocks';
import { useStateCode } from '../data/useStateCode';
import Page from '../components/layouts/Page';

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
    <Page wide={false} pageTitle='useState'>
      <div>
        <h1>Use State Example</h1>
        <hr />
        <button onClick={minusCount} className='btn btn-primary mr-4'>
          -
        </button>
        <span className='display-3'>{counter}</span>
        <button onClick={plusCount} className='btn btn-primary ml-4'>
          +
        </button>
      </div>
      <hr />
      <section className='code-block'>
        <CopyBlock
          text={useStateCode}
          language='javascript'
          showLineNumbers={true}
          theme={atomOneLight}
          wrapLines
        />
      </section>
    </Page>
  );
}

UseState.propTypes = {};

export default UseState;
