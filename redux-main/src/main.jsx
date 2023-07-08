import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import store from './Redux/store.jsx'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/User.jsx";

// import themeReducer from "./features/theme";
import thunk from 'redux-thunk';


const store = configureStore({
  reducer: {
    user: userReducer,

    // theme: themeReducer,
  },
  middleware:[thunk]
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
