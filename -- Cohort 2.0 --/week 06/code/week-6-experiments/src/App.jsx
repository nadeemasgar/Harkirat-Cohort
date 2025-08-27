// This is about how React reconciles & reuses elements in the DOM when you update state.

import { useState, memo } from "react";

function App() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random());
  }

  return (
    <>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </>
  );
}

const Header = memo(({ title }) => {
  return <div>{title}</div>;
});

export default App;

// 2nd Code

/*
  import { useState, memo } from "react";

  function App() {
    const [firstTitle, setFirstTitle] = useState("my name is harkirat");

    function changeTitle() {
      setFirstTitle("My name is " + Math.random());
    }

    return (
      <div>
        <button onClick={changeTitle}>Click me to change the title</button>
        <Header title={firstTitle} />
        <Header title="My name is raman" />
        <Header title="My name is raman" />
        <Header title="My name is raman" />
        <Header title="My name is raman" />
        <Header title="My name is raman" />
      </div>
    );
  }

  const Header = memo(({ title }) => {
    return <div>{title}</div>;
  });

  export default App;
*/

/*
  Key insight ->
  With <>...</> (fragment), React sometimes remounts siblings when props are the same and no key is given.
  With <div>...</div>, React has a single root node, so reconciliation is more stable, and only the changing Header re-renders.
*/
