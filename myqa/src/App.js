import XMLDATA from './twbx/test.twb'
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
// import { formatData } from './helpers'



const App = () => {
  var XMLParser = require('react-xml-parser')

  const [xml, setXML] = useState(null)
  const [dashboardsXML, setDashboardsXML] = useState(null)
  const [worksheetsXML, setWorksheetsXML] = useState(null)
  const [dashboards, setdashboards] = useState([])
  const [dashTitle, setDashTitle] = useState([])


  const dashboardFactory = (name, size, formattedText) => {
    return { name, size, formattedText }
  }

  const dashTitleFactory = (fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, textAlign, backgroundColor, borderWidth, borderColor, borderStyle) => {
    return { fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, textAlign, backgroundColor, borderWidth, borderColor, borderStyle }
  }
  const dashSubTitleFactory = (fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, backgroundColor) => {
    return { fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, backgroundColor }
  }

  const dashTextFactory = (fontFamily, fontSize, fontWeight, fontStyle, textDecoration, color, textAlign, textOrientation, verticalAlign, wrap) => {
    return { fontFamily, fontSize, fontWeight, fontStyle, textDecoration, color, textAlign, textOrientation, verticalAlign, wrap }
  }

  const tableFactory = (backgroundColor) => {
    return { backgroundColor }
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
      let dashSubTitleInstanceArr = []
      let dashTextInstanceArr = []
      let tableInstanceArr = []


      //check if we have dashboards in twb
      if (dashboardsXML) {

        //for loop over dashboards
        for (let a = 0; a < dashboardsXML.children.length; a++) {
          let dashTitleObj = {}
          let dashSubTitleObj = {}
          let dashTextObj = {}

          let dashboard = (dashboardsXML.children[a])
          let dbname = (dashboard.attributes.name)
          dashboardNameArr.push(dbname)

          let dashboardChildren = (dashboard['children'])
          let styleIndex = dashboardChildren.findIndex(x => x.name == 'style')
 
          try {
            let style = (dashboardChildren[styleIndex]["children"])

            //check if style exist in dashboard, if not than default to all 4 items
            if (style.length == 0) {

              let dashTableInstance = tableFactory('Default')
              let dashTitleInstance = dashTitleFactory('Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default',)
              let dashSubTitleInstance = dashSubTitleFactory('Default','Default','Default','Default','Default','Default','Default')
              let dashTextInstance = dashTextFactory('Default','Default','Default','Default','Default','Default','Default','Default','Default')

              tableInstanceArr.push(dashTableInstance)
              dashTitleInstanceArr.push(dashTitleInstance)
              dashSubTitleInstanceArr.push(dashSubTitleInstance)
              dashTextInstanceArr.push(dashTextInstance)

            } else {
              //style exist so lets scrap
              // we have to setup the default instance and change if the value exist in XML
              let TableInstance = tableFactory('Default')
              let dashTitleInstance = dashTitleFactory('Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default',)
              let dashSubTitleInstance = dashSubTitleFactory('Default','Default','Default','Default','Default','Default','Default')
              let dashTextInstance = dashTextFactory('Default','Default','Default','Default','Default','Default','Default','Default','Default')


              for (let a = 0; a < style.length; a++) {
                let element = (style[a].attributes.element)

                if (element === 'dash-title') {
                  let dashTitle = (style[a]['children'])

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

                  dashTitleInstance.fontWeight = fontWeightCheck
                  dashTitleInstance.fontStyle = fontStyleCheck
                  dashTitleInstance.textDecoration = textDecorationCheck
                  dashTitleInstance.fontFamily = fontFamilyCheck
                  dashTitleInstance.fontSize = fontSizeCheck
                  dashTitleInstance.color = colorCheck
                  dashTitleInstance.textAlign = textAlignCheck
                  dashTitleInstance.backgroundColor = backgroundColorCheck
                  dashTitleInstance.borderWidth = borderWidthCheck
                  dashTitleInstance.borderColor = borderColorCheck
                  dashTitleInstance.borderStyle = borderStyleCheck
                  // let dashTitleInstance = dashTitleFactory(fontWeightCheck, fontStyleCheck, textDecorationCheck, fontFamilyCheck, fontSizeCheck, colorCheck, textAlignCheck, backgroundColorCheck, borderWidthCheck, borderColorCheck, borderStyleCheck)
                  // dashTitleInstanceArr.push(dashTitleInstance)

                } else if (element === 'table') {
                  let tableValue = (style[a].children[0].attributes.value)
                  TableInstance.backgroundColor = tableValue
 
                } else if (element === 'dash-subtitle') {
                  let dashSubTitle = (style[a]['children'])
 
                  for (let b = 0; b < dashSubTitle.length; b++) {

                    let dashSubTitleAttr = dashSubTitle[b].attributes.attr
                    let dashSubTitleValue = dashSubTitle[b].attributes.value

                    dashSubTitleObj[dashSubTitleAttr] = dashSubTitleValue

                  }

                  let fontFamilyCheck = dashSubTitleObj['font-family']
                  let fontSizeCheck = dashSubTitleObj['font-size']
                  let fontWeightCheck = dashSubTitleObj['font-weight']
                  let fontStyleCheck = dashSubTitleObj['font-style']
                  let textDecorationCheck = dashSubTitleObj['text-decoration']
                  let backgroundColorCheck = dashSubTitleObj['background-color']
                  let colorCheck = dashSubTitleObj['color']

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
                  if (backgroundColorCheck == undefined) {
                    backgroundColorCheck = 'Default'
                  }

                  dashSubTitleInstance.fontWeight = fontWeightCheck
                  dashSubTitleInstance.fontStyle = fontStyleCheck
                  dashSubTitleInstance.textDecoration = textDecorationCheck
                  dashSubTitleInstance.fontFamily = fontFamilyCheck
                  dashSubTitleInstance.fontSize = fontSizeCheck
                  dashSubTitleInstance.color = colorCheck
                  dashSubTitleInstance.backgroundColor = backgroundColorCheck
                  // let dashSubTitleInstance = dashSubTitleFactory(fontWeightCheck, fontStyleCheck, textDecorationCheck, fontFamilyCheck, fontSizeCheck, colorCheck, backgroundColorCheck)

                  // dashSubTitleInstanceArr.push(dashSubTitleInstance)

                } else if (element === 'dash-text') {
                  let dashText = style[a]['children']
                  for (let b = 0; b < dashText.length; b++) {

                    let dashTextAttr = dashText[b].attributes.attr
                    let dashTextValue = dashText[b].attributes.value

                    dashTextObj[dashTextAttr] = dashTextValue
                    
                  }

                  let fontFamilyCheck = dashTextObj['font-family']
                  let fontSizeCheck = dashTextObj['font-size']
                  let fontWeightCheck = dashTextObj['font-weight']
                  let fontStyleCheck = dashTextObj['font-style']

                  let textDecorationCheck = dashTextObj['text-decoration']
                  let colorCheck = dashTextObj['color']
                  let textAlignCheck = dashTextObj['text-align']
                  let textOrientationCheck = dashTextObj['text-orientation']
                  let verticalAlignCheck = dashTextObj['vertical-align']
                  let wrapCheck = dashTextObj['wrap']

                  if (fontFamilyCheck == undefined) {
                    fontFamilyCheck = 'Default'
                  }
                  if (fontSizeCheck == undefined) {
                    fontSizeCheck = 'Default'
                  }
                  if (fontWeightCheck == undefined) {
                    fontWeightCheck = 'Default'
                  }
                  if (fontStyleCheck == undefined) {
                    fontStyleCheck = 'Default'
                  }

                  if (textDecorationCheck == undefined) {
                    textDecorationCheck = 'Default'
                  }
                  if (colorCheck == undefined) {
                    colorCheck = 'Default'
                  }
                  if (textAlignCheck == undefined) {
                    textAlignCheck = 'Default'
                  }
                  if (textOrientationCheck == undefined) {
                    textOrientationCheck = 'Default'
                  }
                  if (verticalAlignCheck == undefined) {
                    verticalAlignCheck = 'Default'
                  }
                  if (wrapCheck == undefined) {
                    wrapCheck = 'Default'
                  }

                  dashTextInstance.fontFamily = fontFamilyCheck
                  dashTextInstance.fontSize = fontSizeCheck
                  dashTextInstance.fontWeight = fontWeightCheck
                  dashTextInstance.fontStyle = fontStyleCheck
                  dashTextInstance.textDecoration = textDecorationCheck
                  dashTextInstance.color = colorCheck
                  dashTextInstance.textAlign = textAlignCheck
                  dashTextInstance.textOrientation = textOrientationCheck
                  dashTextInstance.verticalAlign = verticalAlignCheck
            
                  
                }
            }
            tableInstanceArr.push(TableInstance)
            dashTitleInstanceArr.push(dashTitleInstance)
            dashSubTitleInstanceArr.push(dashSubTitleInstance)
            dashTextInstanceArr.push(dashTextInstance)
            
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
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
