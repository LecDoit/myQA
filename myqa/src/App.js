import XMLDATA from './twbx/test.twb'
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
// import { formatData } from './helpers'



const App = () => {
  var XMLParser = require('react-xml-parser')

  var [xml, setXML] = useState(null)
  var [dashboardsXML, setDashboardsXML] = useState(null)
  var [worksheetsXML, setWorksheetsXML] = useState(null)
  var [dashboards, setdashboards] = useState([])


  const dashboardFactory = (name, size, formattedText) => {
    return { name, size, formattedText }
  }

  const dashTitleFactory = (fontWeight, fontStyle, textDecoration, fontFamilly, fontSize, color, textAlign, backgroundColor, borderWidth, borderColor, borderStyle) => {
    return { fontWeight, fontStyle, textDecoration, fontFamilly, fontSize, color, textAlign, backgroundColor, borderWidth, borderColor, borderStyle }
  }

  let dashboardsPick = () => {
    console.log(xml)
    let abc = document.getElementById('xml')
    abc.innerText = xml
  }

  useEffect(() => {
    axios.get(XMLDATA, { 'Content-Type': 'application/xml; charset=utf-8' })
      .then(res => {
        console.log('test')
        setXML(res.data)

        var xmlRAW = new XMLParser().parseFromString(res.data)
        let dashboardsXMLGet = xmlRAW.getElementsByTagName('dashboards')[0]
        setDashboardsXML(dashboardsXMLGet)

        let worksheetsXMLGet = xmlRAW.getElementsByTagName('worksheets')[0]
        setWorksheetsXML(worksheetsXMLGet)
      })


  }, [])

  useEffect(() => {

    if (xml) {

      let dashboardInstanceArr = []
      for (let a = 0; a < dashboardsXML.children.length; a++) {

        // let dbsize = (dashboardsXML.children[a].getElementsByTagName('size')[0].attributes)
        let dashboard = (dashboardsXML.children[a])
        let dbname = (dashboard.attributes.name)

        let dashTitle = (dashboard.getElementsByTagName('style')[0].getElementsByTagName('style-rule')[0])
        if ((dashboard.getElementsByTagName('style')[0].getElementsByTagName('style-rule')[0])) {

          for (let b = 0; b < dashTitle.children.length; b++) {

            console.log(dashTitle.children[b].attributes)

            const dash = dashTitleFactory()
            if ((dashTitle.children[b].attributes.attr) == 'font-weight') {
              console.log((dashTitle.children[b].attributes.value))
            }
          }
        } else {
          // console.log('not exist') FINISHED HERE
        }

        // if (( typeof(dashboardsXMLGet.children[a].getElementsByTagName('layout-options')[0].getElementsByTagName('title')[0]).getElementsByTagName('run')[0].attributes) =='undefined'){
        //   console.log('its blank')
        // } else{

        // let dbformattedText = (dashboardsXML.children[a].getElementsByTagName('layout-options')[0].getElementsByTagName('title')[0]).getElementsByTagName('run')[0].attributes
        // console.log(dbformattedText)
        // console.log(dashTitle)


      }
      console.log("test")


    }
  }, [dashboardsXML])

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
