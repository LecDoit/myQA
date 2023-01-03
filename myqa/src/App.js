import XMLDATA from './twbx/test.twb'
import React,{useState,useEffect}from 'react'
import axios from 'axios'



const App = ()=> {  
  var XMLParser = require('react-xml-parser')

  var [xml,setXML ]= useState('')
  var [dashboardsXML,setDashboardsXML] = useState('')
  var [worksheetsXML,setWorksheetsXML] = useState('')
  var [dashboards,setdashboards] = useState([])


  const dashboardFactory = (name,size) =>{
    return {name,size}
  }

  let dashboardsPick = ()=>{
    console.log(dashboardsXML)
  }
  
useEffect(()=>{
  let getXML = (callback) =>{
    setTimeout(()=>{
      axios.get(XMLDATA,{'Content-Type':'application/xml; charset=utf-8'})
      .then((res)=>{
        console.log('test')
        setXML(res.data)

        var xmlRAW =  new XMLParser().parseFromString(res.data)
        let dashboardsXMLGet =  xmlRAW.getElementsByTagName('dashboards')[0]
        setDashboardsXML(dashboardsXMLGet)

        let worksheetsXMLGet =  xmlRAW.getElementsByTagName('worksheets')[0]
        setWorksheetsXML(worksheetsXMLGet)



        for (let a =0 ;a < dashboardsXMLGet.children.length;a++){

          let dbname = (dashboardsXMLGet.children[a].attributes.name)
          let dbsize = (dashboardsXMLGet.children[a].getElementsByTagName('size')[0].attributes)
          let dashboardInstance = (dashboardFactory(dbname,dbsize))
          console.log(dashboardInstance)
          setdashboards([dashboardInstance,...dashboards])
          //we ended here
        }

      })


      // let dashboardInstance = (callback('test','2'))
      // setdashboards(dashboardsXML)
    },0)
  }

  getXML(dashboardsPick)
},[])

    
   let  printXML = () =>{
    var xmlRAW =   new XMLParser().parseFromString(xml)
    let dashboardsGet =  xmlRAW.getElementsByTagName('dashboards')[0].children

    setDashboardsXML(dashboardsGet)
   


    let main =  document.getElementById('roots')
    main.innerText =  JSON.stringify(dashboardsGet)
    console.log(dashboards)
    
  }

  let checkState = () =>{
    console.log(dashboards)
  }



  return (
    
    <div className="App">
      
      <button onClick={checkState}>load state</button>
      {/* <button onClick={checkState}>check state</button> */}
      <div id='roots'></div>
      {/* <div>{xml.map}</div> */}
    </div>
  );
}

export default App;
