// noteSlice.js
import {createSlice} from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state: any, action) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(
        (note: any) => note.id !== action.payload,
      );
    },
    updateNote: (state, action) => {
      const {id, text} = action.payload;
      const noteToUpdate: any = state.notes.find((note: any) => note.id === id);
      if (noteToUpdate) {
        noteToUpdate.text = text;
      }
    },
  },
});

export const {addNote, removeNote} = noteSlice.actions;
export default noteSlice.reducer;
