import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { createGlobalStyle } from "styled-components";

import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
html,
body{
  margin: 0;
  padding: 0;
  background: #f0efe2;

}

body{
        font-family: "Lucida Console", "Courier New", monospace;

}
  * {
    margin: 0;
    padding: 0;

  }
  *,
  *::before,
  *::after {
        box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/**  padding: 10px 0;
 * FF0000
 * FFFFFF
 *
 *
 *
 */
