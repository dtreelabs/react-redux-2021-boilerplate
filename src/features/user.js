import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 101,
    name: 'kapil bhosale',
    age: 32,
  },
  reducers: {
    login: (state, action) => {
      return {...state, ...action.payload}
    }
  }
});

export const { login } = userSlice.actions;
export default userSlice.reducer;