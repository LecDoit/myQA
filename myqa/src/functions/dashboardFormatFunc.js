const dashTitleFactory = (dbname,fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, textAlign, backgroundColor, borderWidth, borderColor, borderStyle) => {
return {dbname, fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, textAlign, backgroundColor, borderWidth, borderColor, borderStyle }
}
const dashSubTitleFactory = (dbname,fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, backgroundColor) => {
return {dbname, fontWeight, fontStyle, textDecoration, fontFamily, fontSize, color, backgroundColor }
}

const dashTextFactory = (dbname,fontFamily, fontSize, fontWeight, fontStyle, textDecoration, color, textAlign, textOrientation, verticalAlign, wrap) => {
return {dbname, fontFamily, fontSize, fontWeight, fontStyle, textDecoration, color, textAlign, textOrientation, verticalAlign, wrap }
}

const tableFactory = (dbname, backgroundColor) => {
return {dbname, backgroundColor }
}

const formatDashbordObject = (dashTitle,dashSubTitle,dashText,table) =>{
  return {dashTitle,dashSubTitle,dashText,table}
}

export let formatDashboard = (xmlArg)=>{

    // let dashboardsXML = xmlArg

    let dashboardNameArr = []
    let dashTitleInstanceArr = []
    let dashSubTitleInstanceArr = []
    let dashTextInstanceArr = []
    let tableInstanceArr = []


      //check if we have dashboards in twb
      if (xmlArg) {

        //for loop over dashboards
        for (let a = 0; a < xmlArg.children.length; a++) {
          let dashTitleObj = {}
          let dashSubTitleObj = {}
          let dashTextObj = {}

          let dashboard = (xmlArg.children[a])
          let dbname = (dashboard.attributes.name)
          dashboardNameArr.push(dbname)

          let dashboardChildren = (dashboard['children'])
          let styleIndex = dashboardChildren.findIndex(x => x.name == 'style')
 
          try {
            let style = (dashboardChildren[styleIndex]["children"])

            //check if style exist in dashboard, if not than default to all 4 items
            if (style.length == 0) {

              let dashTableInstance = tableFactory(dbname,'Default')
              let dashTitleInstance = dashTitleFactory(dbname, 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default',)
              let dashSubTitleInstance = dashSubTitleFactory(dbname,'Default','Default','Default','Default','Default','Default','Default')
              let dashTextInstance = dashTextFactory(dbname,'Default','Default','Default','Default','Default','Default','Default','Default','Default')

              tableInstanceArr.push(dashTableInstance)
              dashTitleInstanceArr.push(dashTitleInstance)
              dashSubTitleInstanceArr.push(dashSubTitleInstance)
              dashTextInstanceArr.push(dashTextInstance)

            } else {
              //style exist so lets scrap
              // we have to setup the default instance and change if the value exist in XML
              let TableInstance = tableFactory(dbname,'Default')
              let dashTitleInstance = dashTitleFactory(dbname,'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default', 'Default',)
              let dashSubTitleInstance = dashSubTitleFactory(dbname,'Default','Default','Default','Default','Default','Default','Default')
              let dashTextInstance = dashTextFactory(dbname,'Default','Default','Default','Default','Default','Default','Default','Default','Default')


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
      let dbFormatObj = formatDashbordObject(dashTitleInstanceArr,dashSubTitleInstanceArr,dashTextInstanceArr,tableInstanceArr)
      return dbFormatObj
    
    }