import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";

import  NewAuth from './store/NewAuth.js';

import { MovieApi } from './store/MovieApi.js';


const store = configureStore({
  reducer: {

     NewAuth,


    [MovieApi.reducerPath]: MovieApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(MovieApi.middleware),
});
setupListeners(store.dispatch);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
