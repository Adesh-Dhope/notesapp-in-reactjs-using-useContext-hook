// components/Notes.js
import React, { useState } from 'react';
import { useNotes } from './NotesContext';
import './Notes.css';

const Notes = () => {
  const { notes, addNote, deleteNote } = useNotes();
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <div className="notes-container">
      <form onSubmit={handleSubmit} className="notes-form">
        <input type="text" placeholder="Enter a note" className="note-input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit" className="add-note-button">Add Note</button>
      </form>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            <span>{note}</span>
            <button onClick={() => deleteNote(index)} className="delete-note-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;