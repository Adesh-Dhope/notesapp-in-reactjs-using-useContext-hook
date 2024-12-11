
import React from 'react';
import NotesProvider from './Components/NotesContext';
import Notes from './Components/Notes';
import './App.css';

function App() {
  return (
    <NotesProvider>
      <div className="app-container">
        <h1 style={{textAlign:'center'}}>Notes App</h1>
        <Notes />
      </div>
    </NotesProvider>
  );
}
export default App;