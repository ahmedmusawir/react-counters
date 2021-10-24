import React, { Component } from 'react';

export class Counter extends Component {
  stylesBadge = {
    borderRadius: 20,
    padding: '.5rem',
  };

  render() {
    return (
      <div className='mt-2'>
        {this.props.children}
        <span style={this.stylesBadge} className={this.styleCount()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-info'
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger m-2'
        >
          Delete
        </button>
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
