import React, { Component } from 'react';
import Counters from '../components_class/Counters';
import Navbar from '../components_class/Navbar';

class CounterPage extends Component {
  state = {
    imageUrl: 'https://picsum.photos/400/200',
    counters: [
      { id: 1, value: 40 },
      { id: 2, value: 0 },
      { id: 3, value: 10 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => (c.value = 0));
    this.setState(counters);
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          imageUrl={this.state.imageUrl}
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default CounterPage;
