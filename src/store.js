// Task 5: Import details to store.js

// 1. Importing Necessary Functions and Files:

// The configureStore function from the @reduxjs/toolkit package is imported to set up the Redux store
import { configureStore } from '@reduxjs/toolkit';

// The cartReducer from the CartSlice.jsx file which is imported, manages the state slice related to the shopping cart
import cartReducer from './CartSlice';

// 2. Configuring the Store:

// The configureStore function is used to setup the Redux store
// Inside the configuration object passed to configureStore, the reducer key specifies the reducer functions
// In this case, the cartReducer is assigned to manage the cart slice of the state

// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
    // Define the root reducer object
    reducer: {
        // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
    },
});

// 3. Exporting the Store:

// The configured Redux store is exported using export default store, so it can be used throughout the application to manage state
export default store; // Export the store for use in the app (e.g., in <Provider store={store}>)