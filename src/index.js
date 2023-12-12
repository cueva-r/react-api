import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Api } from "./Api";
import Navegacion from "./Navegacion";
// import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ComponentState } from './componentState';
import { Example2 } from './useEfect';
// import { Api } from './Api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Api /> */}
    <Router>
      <div>
        <Navegacion />
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/api" element={<Api />} />
          <Route path="/componentState" element={<ComponentState />} />
          <Route path="/useEffect" element={<Example2 />} />
        </Routes>
      </div>
    </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

