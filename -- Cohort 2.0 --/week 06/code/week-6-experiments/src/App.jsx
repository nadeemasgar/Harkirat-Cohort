import { useState } from "react";
import "./App.css";

function App() {
  return <CardWrapper>Hi There</CardWrapper>;
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}

export default App;
