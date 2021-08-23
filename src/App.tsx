import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ store }: { store: any }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={e => {
          store.fetch()
          console.log('click')
        }}>
          кнопка
        </button>
      </header>
    </div>
  );
}

export default App;
