import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>     
)

// Started-24.12.26

// Dependancies
// 1. FONT:
//      import-font from- https://fonts.google.com/selection/embed
// 2. REACT ROUTER DOM:
//      npm i react-router-dom


// ------NOTES------

// 1. How to do ROUTING:
//      ReactDOM.createRoot(document.getElementById('root'))
//              .render(
//                        <BrowserRouter>
//                         <App/>
//                        </BrowserRouter>     
//               )