import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="harkirat2"></Header>
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is harkirat");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
