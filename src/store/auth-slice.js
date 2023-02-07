import { createSlice } from '@reduxjs/toolkit';

// ## This is the Reducer File
// Initial State of User Auth
const initialAuthState = {
  isAuthenticated: false,
};

// Reducer Function created with createSlice() Method
const authSlice = createSlice({
  // / Preparing Slice of Global State
  name: 'authentication',
  initialState: initialAuthState,
  // Creating Reducer with All Methods that Changes the State
  reducers: {
    // Actions
    login(state) {
      // Updating State Immutabale Way i.e Brand New State with Redux-Toolkit
      state.isAuthenticated = true;
    },
    // Actions
    logout(state) {
      // Updating State Immutabale Way i.e Brand New State with Redux-Toolkit
      state.isAuthenticated = false;
    },
  },
});

// NAMED EXPORT
// Connecting Redux Toolkit
// Make Available all the Actions to COMPONENTS
export const authActions = authSlice.actions;

// DEFAULT EXPORT
// To Access the Reducer from Outside i.e ONLY Reducer
export default authSlice.reducer;