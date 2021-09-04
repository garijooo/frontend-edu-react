import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Note from './components/Pages/Note';
import Blank from './components/Pages/Blank';

import './styles/index.css';

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/notes/blank" component={Blank} />
          <Route exact path="/notes/:id" component={Note} />
          <Redirect to="/notes/blank" />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
