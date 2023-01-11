import XMLDATA from './twbx/test.twb'
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
// import { formatData } from './helpers'
import {formatDashboard} from './functions/dashboardFormatFunc'


const App = () => {
  var XMLParser = require('react-xml-parser')

  const [xml, setXML] = useState(null)
  const [workbookStyleXML, setWorkbookStyleXML] = useState(null)
  const [dashboardsXML, setDashboardsXML] = useState(null)
  const [worksheetsXML, setWorksheetsXML] = useState(null)
  const [dashboards, setdashboards] = useState([])
  const [dashTitle, setDashTitle] = useState([])



  let dashboardsPick = () => {
    console.log(xml)
    let abc = document.getElementById('xml')
    abc.innerText = xml
  }

  // gather the XML data and store
  useEffect(() => {
    axios.get(XMLDATA, { 'Content-Type': 'application/xml; charset=utf-8' })
      .then(res => {
        console.log('test')
        setXML(res.data)

        var xmlRAW = new XMLParser().parseFromString(res.data)


        let workbookXMLGet= (xmlRAW.getElementsByTagName('workbook')[0].children)
        for (let a = 0;a<workbookXMLGet.length;a++){
          if ((workbookXMLGet[a].name)==='style'){
            setWorkbookStyleXML(workbookXMLGet[a])
          }
        }

        let dashboardsXMLGet = xmlRAW.getElementsByTagName('dashboards')[0]
        setDashboardsXML(dashboardsXMLGet)

        let worksheetsXMLGet = xmlRAW.getElementsByTagName('worksheets')[0]
        setWorksheetsXML(worksheetsXMLGet)
      })


  }, [])

  useEffect(() => {
    // formatDashboard(dashboardsXML)
    let formatWorkbookFunc = (workbookXML) =>{
      if (workbookXML){
        let styleRuleArr = (workbookXML.children)

        for (let a = 0;a<styleRuleArr.length;a++){
          let element = styleRuleArr[a].attributes.element

          if (element ==='axis'){
            let format = styleRuleArr[a].children
            for (let b = 0 ; b<format.length;b++){
              let attr = (format[b].attributes.attr)
              let value = (format[b].attributes.value)
              console.log(attr)
              console.log(value)
            }
            //ENDED HERE
            
          }
        }
        

      }


    }
    formatWorkbookFunc(workbookStyleXML)

  }, [workbookStyleXML])

  // useEffect(() => {
  //   if (dashboardsXML) {
  //     let obj2 = {
  //       name: dashboardsXML.name,
  //       children: dashboardsXML.children
  //     }
  //     setdashboards(obj2)
  //   }



  // }, [dashboardsXML])



  // const formData = useMemo(() => {
  //   if (dashboardsXML) {
  //     const obj = {
  //       name: dashboardsXML.name,
  //       children: dashboardsXML.children
  //     }
  //     return obj
  //   }

  // }, [dashboardsXML])

  // console.log(dashboardsXML)

  let printXML = () => {
    var xmlRAW = new XMLParser().parseFromString(xml)
    let dashboardsGet = xmlRAW.getElementsByTagName('dashboards')[0].children

    setDashboardsXML(dashboardsGet)



    let main = document.getElementById('roots')
    main.innerText = JSON.stringify(dashboardsGet)
    console.log(dashboards)

  }

  let checkState = () => {
    console.log(dashboardsXML)
  }



  return (

    <div className="App">

      <button onClick={checkState}>load state</button>
      {/* <button onClick={checkState}>check state</button> */}
      <div id='roots'></div>
      <div id='xml'></div>
      {/* <div>{xml.map}</div> */}
    </div>
  );
}

export default App;
