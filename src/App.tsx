import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import { MedalistProvider } from "./context/medalistsContext";

import "./assets/styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <MedalistProvider>
        <Routes />
      </MedalistProvider>
    </BrowserRouter>
  );
}

export default App;
