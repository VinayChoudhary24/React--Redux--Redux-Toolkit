import { createSlice } from '@reduxjs/toolkit';

// ## This is the Reducer File
// Initial State of Counter and Toggle
const initialCounterState = { counter: 0, showCounter: true };

// Reducer Function created with createSlice() Method
const counterSlice = createSlice({
  // Preparing Slice of Global State
  name: 'counter', 
  initialState: initialCounterState,
  // Creating Reducer with All Methods that Changes the State
  reducers: {
    // Actions
    increment(state) { 
      // Updating State Immutabale Way i.e Brand New State with Redux-Toolkit
      state.counter++;
    },
    // Actions
    decrement(state) {
      // Updating State Immutabale Way i.e Brand New State with Redux-Toolkit
      state.counter--;
    },
    // Actions
    // Add Action i.e the Data Required
    increase(state, action) {
      // Updating State Immutabale Way i.e Brand New State with Redux-Toolkit
      state.counter = state.counter + action.payload;
    },
    // Actions
    toggleCounter(state) {
      // Updating State Immutabale Way i.e Brand New State with Redux-Toolkit
      state.showCounter = !state.showCounter;
    },
  },
});

// NAMED EXPORT
// Connecting Redux Toolkit
// Make Available all the Actions to COMPONENTS
export const counterActions = counterSlice.actions;

// DEFAULT EXPORT
// To Access the Reducer from Outside i.e ONLY Reducer
export default counterSlice.reducer;