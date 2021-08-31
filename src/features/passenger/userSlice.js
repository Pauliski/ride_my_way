import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'Auth',
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    isAuthenticated: false,
    isError: ""
  },
  reducers: {
    currentUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.isAuthenticated = true

    },
    setError: (state, action) =>{
      state.isError = action.payload.error
    },
    isLogout: state => {
        state.firstName = '';
        state.lastName = '';
        state.email = '';
        state.isAuthenticated = false
    },
    setUserUpdate: state =>{

    }
  }
})

// Action creators are generated for each case reducer function
export const { currentUser, isLogout, setError, setUserUpdate } = userSlice.actions

export default userSlice.reducer