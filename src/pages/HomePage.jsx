import React, { useState } from 'react';
import Page from '../components/layouts/Page';
import PageHeader from '../components/count-page/PageHeader';
import Counters from '../components/count-page/Counters';

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
    <Page wide={false} pageTitle='Home Page'>
      <PageHeader
        counters={counters}
        stylesBadge={stylesBadge}
        onReset={onReset}
      />
      <Counters
        counters={counters}
        stylesBadge={stylesBadge}
        styleCount={styleCount}
        formatCount={formatCount}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    </Page>
  );
}
