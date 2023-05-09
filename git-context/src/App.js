import React, {createContext, useState} from 'react';
import './App.css';

import Count from './Count';
import Display from './Display';

export const store = createContext();

function App() {
  
  const [data, setData] = useState([
    {id:1,brandname:'Iphone'},
    {id:2,brandname: 'Samsung'},
    {id:3,brandname: 'MI'},
    {id:4,brandname: 'Oppo'}
  ]);

  return (
    <store.Provider value = {[data, setData]} >
      <div className="container">
        <h1> Mobile Products with Context APIr</h1>
        <center>
          <Count />
          <Display />         
        </center>
       </div>
   
    </store.Provider>
  );
}

export default App;
