import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div className="App">
      <h1>Listado de todos los productos</h1>
      <ItemListContainer />
    </div>
  );
}

export default App;