import React from 'react';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo />
      <Form
        label="Add todo"
      />
    </div>
  );
}

export default App;
