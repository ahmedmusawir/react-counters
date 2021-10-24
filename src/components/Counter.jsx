import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/400/200',
    tags: ['tag1', 'tag2', 'tag3'],
    product: 'id:1',
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

  handleIncrement = (product) => {
    console.info('Clicked', product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <img style={this.stylesImg} src={this.state.imageUrl} alt='' />
        <span style={this.stylesBadge} className={this.styleCount()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement(this.state.product)}
          className='btn btn-info'
        >
          Increament
        </button>
        {/* <button onClick={this.handleIncrement} className='btn btn-info'>
          Increament
        </button> */}
        <div>
          {this.state.tags.length === 0 && 'Please Create a new Tag...'}
        </div>
        {this.renderTags()}
      </>
    );
  }

  renderTags = () => {
    return this.state.tags.map((tag) => <li>{tag}</li>);
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  };

  styleCount = () => {
    let classes = 'badge mr-4 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  };
}

export default Counter;
