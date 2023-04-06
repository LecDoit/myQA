import XMLDATA from './twbx/COA.twb'
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import {formatDashboard} from './functions/dashboardFormatFunc'
import {formatWorkbook} from './functions/workbookFormatFunc'
import {formatDashboardRC} from './functions/dashboardTitleRCFunc'
import {formatWorksheetRC} from './functions/worksheetTitleRCFunc'
import {formatWorksheet} from './functions/worksheetFormatFunc'
import {dashboardSize} from './functions/dashboardSizeFunc'
import {wsFilterListFunc} from './functions/filterListFunc'
import {filterTitleRC} from './functions/filterTitleRCFunc'
import {worksheetFormatFilters} from './functions/worksheetFilterFormat'

import { Navbar } from './components/nav'
import { UploadNav } from './components/upload'
import { AnimationNav } from './components/animation'


import "./style.css"




const App = () => {
  var XMLParser = require('react-xml-parser')

  const [xml, setXML] = useState(null)
  const [xmlDOM, setXMLDOM] = useState(null)
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
        console.log('works')
        setXML(res.data)
        let stringz = res.data

        
        var xmlRAW = new XMLParser().parseFromString(stringz,'application/xml')

        let xmlDOM = new DOMParser().parseFromString(res.data, "text/xml");
        setXMLDOM(xmlDOM)
        // var xmlRaw = new XMLParser().parseFromString(stringz, "text/xml")


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
    // formatWorkbook(workbookStyleXML)
    // formatWorksheetRC(worksheetsXML)
    // dashboardSize(dashboardsXML)
    // filterTitleRC(worksheetsXML)
    // worksheetFormatFilters(worksheetsXML)

    // EASY - first loop through the ws and get the names and create the names of worksheets name
    //HARDER - secondly loop throught items on dashboard - look for name in zones and create a list of that

    //getting EASY part
    if (worksheetsXML){
      let wsXML = worksheetsXML
      let worksheetsList = []
      let listOfNodes = []
      let unpackedListOfNodes = []
      let worksheetsOnDashboards = []
      
      let worksheets = wsXML.children
      // console.log(xmlDOM)
      // console.log(wsXML)
      // loop over worksheets and get all the ws names
      for (let a = 0;a<worksheets.length;a++){
        let wsname = worksheets[a].attributes.name

        worksheetsList.push(wsname)
        // console.log(wsname)
        
    
        // let zoneNodeList = (xmlDOM.querySelectorAll(`zone[name="${wsname}"]`))
        // // console.log(xmlDOM.querySelectorAll(`zone[name="On-Time Completion Trend"]`))
        // listOfNodes.push(zoneNodeList)
      }
      // console.log(xmlDOM)
      // let timeZDAMB = (worksheetsList[worksheetsList.length-1])
      // // console.log(xmlDOM.querySelector(`zone[name=${worksheetsList[2]}]`))
      // console.log(xmlDOM.querySelectorAll(`zone[name=${timeZDAMB}]`))
      // console.log(xmlDOM.querySelector(`dashboard[name="Completed Work Order Performance "]`))
      // for (let a = 0 ; a< listOfNodes.length;a++){
      //   for (let b = 0 ;b<listOfNodes[a].length;b++){
      //     // console.log(listOfNodes[a][b])
      //     unpackedListOfNodes.push(listOfNodes[a][b])
      //   }
        
      // }

      //getting all zone with names that are not filter or anything
      let zoneName = xmlDOM.querySelectorAll(`zone[name]`)
      for (let b = 0 ; b<zoneName.length;b++){

        if (zoneName[b].attributes["type-v2"]===undefined){
          worksheetsOnDashboards.push(zoneName[b].attributes.name.value)
        } 
        
      }
      // console.log(worksheetsOnDashboards)
      // console.log(worksheetsList)
    }

    if (dashboardsXML){
      
      
      //dashboards level
      let dbXML = dashboardsXML
      
      //dashboard level
      let dashboard = dbXML.children
      
      //loop through each dashboard in dashboards
      for (let a = 0 ; a<dashboard.length; a++){
        let dashboardChildren = dashboard[a].children
        let zonesList = []
        for (let b = 0 ;b<dashboardChildren.length;b++){
          if (dashboardChildren[b].name==='zones'){
    
            let zones = dashboardChildren[b].getElementsByTagName('zone')

            // let test = dashboardChildren[b].querySelectorAll(`zone[x]=0`)
            
            // i believe this is completely wrong
            // console.log(xmlDOM)
          }

        }
        
      }
      



    }



  }, [worksheetsXML])

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

  // let printXML = () => {
  //   var xmlRAW = new XMLParser().parseFromString(xml)
  //   let dashboardsGet = xmlRAW.getElementsByTagName('dashboards')[0].children

  //   setDashboardsXML(dashboardsGet)



  //   let main = document.getElementById('roots')
  //   main.innerText = JSON.stringify(dashboardsGet)
  //   console.log(dashboards)

  // }

  // let checkState = () => {
  //   console.log(dashboardsXML)
  // }



  return (

    <div className="App">
      {/* <Navbar></Navbar> */}
      <UploadNav></UploadNav>
      {/* <AnimationNav></AnimationNav> */}
    </div>
  );
}

export default App;
