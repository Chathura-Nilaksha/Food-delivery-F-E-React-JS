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
//




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
