import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Pages/Main';
import Note from './components/Pages/Note';
import Blank from './components/Pages/Blank';

import './styles/index.css';

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/notes/blank" component={Blank} />
          <Route exact path="/notes/:id" component={Note} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
