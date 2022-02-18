import React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(`Youhou you clicked ${count}`);
  }, [count]);

  const [name, setName] = React.useState('');
  React.useEffect(() => {
    console.log(`Hello ${name}`);
  }, [name]);
  console.log('Component re-render');

  return (
    <div className="App">
      <h1>Hello {name && `, ${name}`}</h1>
      <form>
        <br />
        <label forhtml="name">Type your Name:</label>
        <br />
        <input
          type="text"
          placeholder="James Bond"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      <h1>Click Counter:</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click
      </button>
    </div>
  );
}
