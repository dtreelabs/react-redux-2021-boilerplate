import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: []
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    initializeUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});

export const { addUser, initializeUsers } = userSlice.actions;
export default userSlice.reducer;
