import React from 'react';
import "./css/reset.css";
import "./css/style.css";
import MenuResumen from "./contenedores/MenuResumen"

function App() {
  return (
    <div className="container">
      <div id="app-holder">
        <div>
          <MenuResumen/>
        </div>
      </div>
    </div>
  );
}
export default App;
