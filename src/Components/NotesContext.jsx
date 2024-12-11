
import React, { createContext, useState, useContext } from 'react';

const NotesContext = createContext();

export const useNotes = () => {
  return useContext(NotesContext);
};

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;