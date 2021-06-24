import React from 'react';
import './App.css';
import Name from "./Name.js";

function App() {
  return (
    <div id="shapeContainer">
      <div className="oval daddyOval"><Name name="Joseph" /></div>
      <div className="oval mommyOval"><Name name="Aileen" /></div>
      <div className="oval emilyOval"><Name name="Emily" /></div>
      <div className="oval rosemarieOval"><Name name="Rosemarie" /></div>
      <div className="oval joeyOval"><Name name="Joseph II" /></div>
    </div>
  );
}

export default App;
