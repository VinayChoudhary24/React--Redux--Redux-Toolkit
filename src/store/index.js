import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

// Creating the Global Store
const store = configureStore({
  // Merging All the Application Reducers
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
