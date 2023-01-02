import XMLDATA from './twbx/test.twb'
import React,{useState,useEffect}from 'react'
import axios from 'axios'


const App = ()=> {  

  var [test,setTest ]= useState(null)



  useEffect(()=>{
    axios
      .get(XMLDATA,{'Content-Type':'application/xml; charset=utf-8'})
      .then((response)=>{
        setTest(response.data)
      })
  },[])


  return (
    <div className="App">
      {/* <button onClick={getAllStuff}>print</button>
      <button onClick={printState}>current state</button>
       */}
       <div>{test}</div>
    </div>
  );
}

export default App;
