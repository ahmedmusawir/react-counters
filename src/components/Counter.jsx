import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };
  stylesImg = {
    clear: 'both',
    display: 'block',
    margin: '10px auto 50px',
  };
  stylesBadge = {
    'border-radius': 20,
    padding: '.5rem',
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className='mt-2'>
        {this.props.children}
        <span style={this.stylesBadge} className={this.styleCount()}>
          {this.formatCount()}
        </span>
        <button onClick={() => this.handleIncrement()} className='btn btn-info'>
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
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  };

  styleCount = () => {
    let classes = 'badge mr-4 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  };
}

export default Counter;
