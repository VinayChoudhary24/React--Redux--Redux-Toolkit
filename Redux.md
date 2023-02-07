## Working With Redux for Any React Application

# Challenges with REDUX
              -- Action Types Identifiers
              -- More States pieces Changes and Managing the Other States COPIES when a Single State Changes.
              -- State Immutability, Always return {} New State

# 1 -- Installing Redux - We need to Install Both the Redux Packages
      GENERAL  -- npm install redux
     *REACT SPECIFIC REDUX -- npm install react-redux      

# 2 -- Creating a Redux Global store for React App -- /store Folder
             Inside /store Folder-- Create index.js for redux LOGIC


# 3 -- To make Sure the Entire App can Access the Redux Global Store -- inside the root index.js file
        -- import { Provider } from 'react-redux';
        -- import store from './store/index';

        <!-- Wrap the Entire App with <Provider> and store={store} -->
        -- const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render(
                          <Provider store={store}>
                               <App />
                          </Provider>
                        );

