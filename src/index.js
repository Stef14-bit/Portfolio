import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoadingScreen from "./components/loading-screen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingScreen />
    <App />
  </React.StrictMode>
);

reportWebVitals();
