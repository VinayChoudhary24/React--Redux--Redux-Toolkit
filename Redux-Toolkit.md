# Challenges with REDUX
              -- Action Types Identifiers -- Redux Toolkit Automatically Creates a UNIQUE IDENTIFIER per Actions
              -- More States pieces Changes and Managing the Other States COPIES when a Single State Changes.
              -- State Immutability, Always return {} New State

# Redux-ToolKit -- Library that Helps us to Manage Redux Challenges
      IMPORTANT -- When Using Redux-Toolkit and Creating Reducer with Function createSlice(), We Cant Accidentely Manipulate the Existing State Because Redux-Toolkit Internally Uses a Package Called EMER, Which Will Detect Code and Automatically CLONE the Existing State and Create a Brand New Object/State and Also Keeps all the Other States that were Not Updated and OVERWRITE the State which Was UPDATED in a IMMUTABLE WAY.
               -- Redux Toolkit Automatically Creates a UNIQUE IDENTIFIER per Actions 

# Redux-Toolkit Operations
                #1 - createSlice() -- creates a Reducer Function which is More Powerful than createReducer().
                #2 - createReducer() -- creates a Reducer Function.
                #3 - configureStore() -- Merging Multiple Reducers Into ONE.

# 1 -- Installing Redux-Toolkit Package -- npm install @reduxjs/toolkit
             -- After installing Redux-Toolkit we Can Remove the General Redux Package from package.json
                                            -- "redux": "^4.0.5",
