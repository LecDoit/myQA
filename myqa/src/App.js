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
  var [dashTitle, setDashTitle] = useState([])


  const dashboardFactory = (name, size, formattedText) => {
    return { name, size, formattedText }
  }

  const dashTitleFactory = (fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, textAlign, backgroundColor, borderWidth, borderColor, borderStyle) => {
    return { fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, textAlign, backgroundColor, borderWidth, borderColor, borderStyle }
  }

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
        let dashboardsXMLGet = xmlRAW.getElementsByTagName('dashboards')[0]
        setDashboardsXML(dashboardsXMLGet)

        let worksheetsXMLGet = xmlRAW.getElementsByTagName('worksheets')[0]
        setWorksheetsXML(worksheetsXMLGet)
      })


  }, [])

  useEffect(() => {

    if (xml) {

      let dashboardNameArr = []
      let dashTitleInstanceArr = []

      //for loop over dashboards
      for (let a = 0; a < dashboardsXML.children.length; a++) {
        let dashTitleObj = {}

        let dashboard = (dashboardsXML.children[a])
        let dbname = (dashboard.attributes.name)
        dashboardNameArr.push(dbname)


        let dashTitle = (dashboard['children'])

        let styleIndex = dashTitle.findIndex(x => x.name == 'style')

        try {
          let style = (dashTitle[styleIndex]["children"])
          for (let a = 0; a < style.length; a++) {
            let element = (style[a].attributes.element)
            if (element == 'dash-title') {
              let dashTitle = (style[a]['children'])

              let dict = {}
              //for loop over items in style/style-rule - format with 
              for (let b = 0; b < dashTitle.length; b++) {


                let dashTitleAttr = dashTitle[b].attributes.attr
                let dashTitleValue = dashTitle[b].attributes.value

                dashTitleObj[dashTitleAttr] = dashTitleValue

              }
              let fontWeightCheck = dashTitleObj['font-weight']
              let fontStyleCheck = dashTitleObj['font-style']
              let textDecorationCheck = dashTitleObj['text-decoration']
              let fontFamilyCheck = dashTitleObj['font-family']
              let fontSizeCheck = dashTitleObj['font-size']
              let colorCheck = dashTitleObj['color']
              let textAlignCheck = dashTitleObj['text-align']
              let backgroundColorCheck = dashTitleObj['background-color']
              let borderWidthCheck = dashTitleObj['border-width']
              let borderColorCheck = dashTitleObj['border-color']
              let borderStyleCheck = dashTitleObj['border-style']
              if (fontWeightCheck == undefined) {
                fontWeightCheck = 'Default'
              }
              if (fontStyleCheck == undefined) {
                fontStyleCheck = 'Default'
              }
              if (textDecorationCheck == undefined) {
                textDecorationCheck = 'Default'
              }
              if (fontFamilyCheck == undefined) {
                fontFamilyCheck = 'Default'
              }
              if (fontSizeCheck == undefined) {
                fontSizeCheck = 'Default'
              }
              if (colorCheck == undefined) {
                colorCheck = 'Default'
              }
              if (textAlignCheck == undefined) {
                textAlignCheck = 'Default'
              }
              if (textAlignCheck == undefined) {
                textAlignCheck = 'Default'
              }
              if (backgroundColorCheck == undefined) {
                backgroundColorCheck = 'Default'
              }
              if (borderWidthCheck == undefined) {
                borderWidthCheck = 'Default'
              }
              if (borderColorCheck == undefined) {
                borderColorCheck = 'Default'
              }
              if (borderStyleCheck == undefined) {
                borderStyleCheck = 'Default'
              }

              let dashTitleInstance = dashTitleFactory(fontWeightCheck, fontStyleCheck, textDecorationCheck, fontFamilyCheck, fontSizeCheck, colorCheck, textAlignCheck, backgroundColorCheck, borderWidthCheck, borderColorCheck, borderStyleCheck)
              dashTitleInstanceArr.push(dashTitleInstance)

            }

            //whats gonna happen when there is no change -all has to be  default
          }
        } catch (error) {
          console.log(error)
        }






      }
      console.log("test")
      console.log(dashboardNameArr)
      console.log(dashTitleInstanceArr)


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
