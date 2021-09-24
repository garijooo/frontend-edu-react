import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomeContainer from './components/Pages/Home/HomeContainer';

import './styles/index.css';

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/notifications" component={HomeContainer} />
          <Route exact path="/basket" component={HomeContainer} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
