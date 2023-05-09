import React, {useContext, useState} from 'react';
import {store} from './App'

import './App.css';

const Display = () => {
    
   const [data, setData] = useContext(store);
   const [name, setName] = useState('')
   console.log(data);
   
 

   const submitHandler = (e) => {
       e.preventDefault();
       setData([...data, {brandname:name}])
     }

   

  return (
     <div>
            <div className="card">
                <div className="card-body">
                    {data.map((item) => { 
                           return <h5 className="card-title" key = {item.id} >{item.brandname}</h5> 
                        })
                    }            
                </div>
            </div>

            <div style={{margin:'10px'}}> 
                <div className="card">
                    <div className="card-body">
                           
                           <form onSubmit={submitHandler}>
                                <div class="form-group">
                                    <label for="adddBrandname">Add Brandname</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control"   placeholder="Enter your Brandname" />                                    
                                </div>
                                <button type="submit" className="btn btn-primary">Adding Brandname</button>
                            </form>    
                         
                    </div>
                </div>        
            
            </div>
    </div>

  )
}

export default Display
