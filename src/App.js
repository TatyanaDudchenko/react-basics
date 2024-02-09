import React from "react";

import "./styles/App.css";
import News from "./pages/News";
import Clients from "./pages/Clients";
import Contractors from "./pages/Contractors";

const App = () => (
  <div className="App">
    <News />
    <Clients />
    <Contractors />
  </div>
);

export default App;
