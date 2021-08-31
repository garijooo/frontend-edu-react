import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GetAllNotesByAuthorId } from './queries';


import Form from './components/Form';
// import Todo from './components/Todo';

function App() {
  const { data, error, loading } = useQuery(GetAllNotesByAuthorId, { variables: {
    id: localStorage.getItem('userId')
  }});
  
  const renderContent = () => {
    if (error) return <p>Error!</p>
    if (loading) return <p>Loading...</p>
    return data.getAllNotesByAuthor.map((note) => <h4 key={note.id}>{note.title}</h4>)
  };
  
  return (
    <main>
      {renderContent}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Form} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
