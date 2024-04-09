import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CatsProvider from "./Components/hooks/CatsContext";
import ListProvider from "./Components/hooks/ListContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CatsProvider>
    <ListProvider>
    <App />
    </ListProvider>
  </CatsProvider>

);
