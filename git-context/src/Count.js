import React, {useContext} from 'react';

import {store} from './App'
import './App.css';


const Count = () => {

    const [data, setData] = useContext(store)

  return (
    <div>
        <h1>Product Count: {data.length}</h1>
      
    </div>
  )
}

export default Count
