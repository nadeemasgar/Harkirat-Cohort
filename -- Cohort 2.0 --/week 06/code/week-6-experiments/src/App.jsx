import { useState } from "react";
import "./App.css";

function App() {
  return <CardWrapper innerComponent={<TextComponent />} />;
}

function TextComponent() {
  return <div>Hi therr</div>;
}

function CardWrapper({ innerComponent }) {
  // Create a div which has a border
  // and inside the div, render the props

  return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
}

export default App;
