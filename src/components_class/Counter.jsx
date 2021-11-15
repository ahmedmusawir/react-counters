import React, { Component } from 'react';

export class Counter extends Component {
  stylesBadge = {
    borderRadius: 20,
    padding: '.5rem',
  };

  render() {
    const { value, counter, onDecrement, onIncrement, onDelete } = this.props;

    return (
      <div className='mt-2 row'>
        <div className='col-6'>
          {this.props.children}
          <span style={this.stylesBadge} className={this.styleCount()}>
            {this.formatCount()}
          </span>
        </div>

        <div className='col-6'>
          <button onClick={() => onIncrement(counter)} className='btn btn-info'>
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className='btn btn-info m-2'
            disabled={counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className='btn btn-danger'
          >
            X
          </button>
        </div>
      </div>
    );
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };

  styleCount = () => {
    let classes = 'badge mr-4 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };
}

export default Counter;
