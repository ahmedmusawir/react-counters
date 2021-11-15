import React, { useState } from 'react';
import Page from '../funcomponents/Page';
import { Row, Col, Button } from 'react-bootstrap';
import Content from '../funcomponents/Content';

export default function HomePage() {
  const stylesBadge = {
    borderRadius: 20,
    padding: '.8rem',
  };

  const [counters, setCounters] = useState([
    { id: 1, value: 40 },
    { id: 2, value: 0 },
    { id: 3, value: 10 },
    { id: 4, value: 0 },
  ]);

  const formatCount = (counter) => {
    const { value } = counter;
    return value === 0 ? 'Zero' : value;
  };

  const styleCount = (counter) => {
    let classes = 'badge mr-4 badge-';
    classes += counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };

  const onIncrement = (counterId) => {
    setCounters(
      counters.map((counter) =>
        counter.id === counterId
          ? { ...counter, value: counter.value + 1 }
          : counter
      )
    );
  };

  const onDecrement = (counterId) => {
    setCounters(
      counters.map((counter) =>
        counter.id === counterId
          ? { ...counter, value: counter.value - 1 }
          : counter
      )
    );
  };

  const onReset = () => {
    setCounters(
      counters.map((counter) =>
        counter.id ? { ...counter, value: 0 } : counter
      )
    );
  };

  const onDelete = (counterId) => {
    setCounters(counters.filter((counter) => counter.id !== counterId));
  };

  return (
    <Page wide={false}>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100'>
            <h3>It's All About The Count...</h3>
            <Button onClick={onReset} variant='danger' size='sm'>
              Reset
            </Button>
            <h4 className='float-right'>
              Positivity:{' '}
              <span className='badge badge-success' style={stylesBadge}>
                {counters.filter((c) => c.value > 0).length}
              </span>
            </h4>
          </Content>
        </Col>
      </Row>

      {counters.map((counter) => (
        <Row key={counter.id} className='justify-content-center'>
          <Col sm={12} md={6}>
            <Content width='w-100' cssClassNames=''>
              <div style={stylesBadge} className={styleCount(counter)}>
                {formatCount(counter)}
              </div>
              Counter ID: {counter.id}
            </Content>
          </Col>
          <Col sm={12} md={6}>
            <Content width='w-100'>
              <Button variant='success' onClick={() => onIncrement(counter.id)}>
                +
              </Button>{' '}
              <Button
                disabled={counter.value <= 0 ? 'disabled' : ''}
                onClick={() => onDecrement(counter.id)}
                variant='warning'
              >
                -
              </Button>{' '}
              <Button variant='danger' onClick={() => onDelete(counter.id)}>
                X
              </Button>
            </Content>
          </Col>
        </Row>
      ))}
    </Page>
  );
}
