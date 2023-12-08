// noteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [{ id: "", title: "", content: "" }],
  },
  reducers: {
    addNote: (state: any, action) => {
      state?.notes?.push(action.payload);
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(
        (note: any) => note.id !== action.payload
      );
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      const noteToUpdate: any = state.notes.find((note: any) => note.id === id);
      if (noteToUpdate) {
        noteToUpdate.title = title;
        noteToUpdate.content = content;
      }
    },
  },
});

export const { addNote, removeNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
