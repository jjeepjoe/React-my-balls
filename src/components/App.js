import React from "react";
import "./App.css";
import Name from "./Name.js";

function App() {
  return (
    <div id="shapeContainer">
      <div className="oval daddyOval oval-shape">
        <Name name="Joseph" />
      </div>
      <div className="oval mommyOval oval-shape">
        <Name name="Aileen" />
      </div>
      <div className="oval emilyOval oval-shape">
        <Name name="Emily" />
      </div>
      <div className="oval rosemarieOval oval-shape">
        <Name name="Rosemarie" />
      </div>
      <div className="oval joeyOval oval-shape">
        <Name name="Joseph II" />
      </div>
    </div>
  );
}

export default App;
