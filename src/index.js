import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Login from "./components/Login";
import "./style.css";


// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Login />,
    <App />
);

