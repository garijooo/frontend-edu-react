import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Pages/Main';
import NotePage from './components/Pages/NotePage';
import Blank from './components/Pages/Blank';

import './styles/index.css';

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/notes/new" component={Blank} />
          <Route exact path="/notes/:id" component={NotePage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
