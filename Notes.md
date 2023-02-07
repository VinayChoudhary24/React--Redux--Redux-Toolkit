## REDUX -- A State management System for CROSS-Component or App-Wide State i.e the Data that Changes affects our Application and UI.
              -- Redux is a FLUX like State Propogation

  # Reducer Function -- it should Not Contain any Side-Effects(Http) and LocalStorage Code.

## Different Types of State
     #1 - LOCAL State -- state that Belongs to a Single Compponent.
                          EX-- Listen to User Input and Using useState() and useReducer() to Store Data.
                          EX-- Toggling a "SHOW MORE" details Field.

     #2 - CROSS-Component State -- State that Affects MULTIPLE Components.
                          EX-- Open/Closed state of MODAL Overlay
                            -- the Modal might be Opened from inside of Other Component and Closed from itself.
                            -- we can manage MODAl useState and useReducer with PROPS i.e Leads to "prop-Drilling".

     #3 - APP-WIDE State -- State that Affects the ENTIRE App[most of the Components].
                         EX-- User Authenticatio State. 
                           -- we can manage MODAl useState and useReducer with PROPS i.e Leads to "prop-Drilling".
      
## React Context API -- Disadvantages
                 -- it Has a Complex Setup/Management i.e End up having MULTIPLE <ContextProvider></ContextProvider>
                 -- Managing a Lot of States can become difficult with Context API.

                 -- LOW Performance for HIGH FREQUENCY Updates i.e Data Changes a LOT / Frequently.
                 -- it is GOOD for Changing THEME of the App.

## Redux Operations
        #1 - .createStore() --- it Create a Store State
        #2 - .getState() --- it gets the Latest New State
        #3 - .subscribe() --- it will subscribe to the Latest New State
        #4 - .dispatch() --- it will dispatch the Action to change the state of Components

## React-Redux Hooks
         #1 - useSelector() --- allows us to take a Slice of the Bigger data i.e to Tap inside the Store and Access Values
         #2 - useDispatch() --- to dispatch Actions

## BASIC Redux-NodeJS Setup 
 # -- Understanding REDUX Working Flow / Process
  <!-- STEP 1 -->
  <!-- state, is the Existing State -->
  <!-- #IMPORTANT -- We Pass Default Value(=) to State so that when redux runs for the First time it will have a Default State to Execute and Will not BREAK... -->
  <!-- action, will change the Existing State to New State -->
  const counterReducer = (state = { counter: 0 }, action) => {
    <!-- Check for the increment Action -->
    if(action.type === 'increment') {
        <!-- Here we return the New State -->
    return {
        counter: state.counter + 1
     };
    }
    <!-- Check for decrement Action -->
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    <!-- Default Return  -->
    return state;
  };

  <!-- Step 2 -->
  <!-- Pass the Reducer Function to Store i.e Which Reducer is Responsible for State Change -->
  const store = redux.createStore(counterReducer);

  <!-- Step 3 -->
  <!-- Subscription -->
  const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
  };

  <!-- Step 4 -->
  <!-- Make Redux Aware of New State -->
  store.subscribe(counterSubscriber);

  <!-- Step 5 -->
  <!-- Dispatching Actions -->
  store.dispatch({
    type: 'increment'
  });

  store.dispatch({
    type: 'decrement'
  });



