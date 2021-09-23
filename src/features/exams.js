import { createSlice } from "@reduxjs/toolkit";

export const examSlice = createSlice({
  name: 'exam',
  initialState: {
    exam_id: 101,
    exam_name: null,
    questions: [],
    current_section: 'physics',
  },
  reducers: {
    setExamId: (state, action) => {
      state.exam_id = action.payload.id
    },
    setExamName: (state, action) => {
      state.exam_name = action.payload.name
    },
    addQuestion: (state, action) => {
      return {...state, questions: [...state.questions, action.payload]}
    },
  }
});

export const { setExamId, setExamName, addQuestion } = examSlice.actions;
export default examSlice.reducer;