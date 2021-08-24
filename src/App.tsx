import React from 'react';
import './App.css';
import MyList from "./components/list"
import Backend from './store/backend';

function App({ backend }: { backend: Backend }) {
  
  return (
    <div className="App">
      <button className="btn"  onClick={e => {
        backend.fetch()
        console.log('click')
      }}>
        кнопка
      </button>
      <MyList />
    </div>
  );
}

export default App;
