import React from "react";

import "./styles/App.css";
import Button from "./components/Button"
import News from "./pages/News";
import Clients from "./pages/Clients";
import Contractors from "./pages/Contractors";
import AddItemModal from "./components/AddItemModal/AddItemModal";

const App = () => (
  <div className="App">
    <Button>
      Создать
    </Button>
    <AddItemModal visible={true}>
      h
    </AddItemModal>
    <News />
    <Clients />
    <Contractors />
  </div>
);

export default App;
