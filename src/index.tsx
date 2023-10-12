import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import './index.css';

const rootEl = document.getElementById("root")
if (rootEl === null) {
	throw new Error("Root missing from the index.html")
}
const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);