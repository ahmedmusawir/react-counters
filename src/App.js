import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import CounterPage from './pages/CounterPage';
import UseStatePage from './pages/UseStatePage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import './App.scss';

function App(props) {
  return (
    <BrowserRouter>
      <MainNavbar />
      <main>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/use-state-page'>
            <UseStatePage />
          </Route>
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

App.propTypes = {};

export default App;
