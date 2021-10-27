import React, { Component } from 'react';
import Counter from './Counter';

export class Counters extends Component {
  stylesImg = {
    clear: 'both',
    display: 'block',
    margin: '10px auto 50px',
  };

  render() {
    const { imageUrl, onReset, onIncrement, onDecrement, onDelete, counters } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className='btn btn-success btn-block m-2'>
          Reset
        </button>
        <img style={this.stylesImg} src={imageUrl} alt='' />

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          >
            <h5 className='font-weight-bold'>Counter ID: {counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
