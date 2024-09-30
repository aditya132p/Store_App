import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './store'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <App /> 
    
    </Provider>
    <ToastContainer />   
  </React.StrictMode>,
)
