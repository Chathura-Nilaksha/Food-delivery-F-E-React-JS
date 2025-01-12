import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)

// Started-24.12.26
// 21.27---40.48----(NET ----  height: 34vw .... DONE)
// 24.28---1.07
//   net
//     background-size: contain;
//     position: relative; absolute
//     display:flex
//      align-items: start;
//      font-size:max(4.5vw, 22px) ;
//      transition: 0.2s;
//
//              .explore-menu-list::-webkit-scrollbar{
//                  display: none;
//                }  //https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
//
//
//    https://react.dev/reference/react/apis: refer this note for below.
//       export const StoreContext = createContext(null);
//       const StoreContextProvider = (props) => {
//           const contextValue = {food_list}          
//           return (
//               <StoreContext.Provider value={contextValue}>
//                   {props.children}
//               </StoreContext.Provider>            
//           )
//       }
//      export default StoreContextProvider;
// 2025.1.2--1.19.37
// 2025.1.5--1.29
// 1.7--1.40.18
// 1.8--1.53.43



// Dependancies
// 1. FONT:
//      import-font from- https://fonts.google.com/selection/embed
// 2. I - REACT ROUTER DOM:
//      npm i react-router-dom



// ------NOTES------

// 1. How to do ROUTING:
//      ReactDOM.createRoot(document.getElementById('root'))
//              .render(
//                        <BrowserRouter>
//                         <App/>
//                        </BrowserRouter>     
//               )

//  2. < ROUTERS >, < ROUTER >
//

// 3. How to IMPORT a obj list ARRAY from a JS file.
//      import { menu_list } from '../../assets/assets';

// 4. writing method of css:
//     .footer-content-left li, .footer-content-right li, .footer-content-center li{
//          list-style: none;
//          margin-bottom: 10px;
//     }