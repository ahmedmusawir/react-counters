import React, { Component } from 'react';
import Counter from './Counter';

export class Counters extends Component {
  state = {
    imageUrl: 'https://picsum.photos/400/200',
    counters: [
      { id: 1, value: 40 },
      { id: 2, value: 0 },
      { id: 3, value: 10 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // alert('Delete Clicked');
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <img style={this.stylesImg} src={this.state.imageUrl} alt='' />

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
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
