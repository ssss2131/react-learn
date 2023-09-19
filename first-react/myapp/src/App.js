import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const mylist = [{ id: 1, title: "apple" }, { id: 2, title: "banana" }, { id: 3, title: "orange" }]

function MyButton({count, onClick}) {
  return (<button onClick={onClick}>Clicked {count} times</button>);
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(c => c + 1);
  }
  const listitem = mylist.map(item => <li key={item.id}>{item.title}</li>)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul style={{ color: "red", fontSize: '60px' }}>
          {listitem}
        </ul>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick}/>
        {/* <button onClick={handleClick}>Click me</button> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
