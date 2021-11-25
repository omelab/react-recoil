import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import "./index.css";
import { App } from "./App";

import reportWebVitals from "./reportWebVitals";

// setup fake backend
import { fakeBackend } from "./_helpers";
fakeBackend();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
