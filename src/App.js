import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Pages/Home';

import './styles/index.css';

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
