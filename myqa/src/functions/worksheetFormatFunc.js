let worksheetFormatFactory = (wsname, worksheet,defaultPane,header,tooltip,title,totalPane,totalHeader,grandTotalPane,grandTotalHeader) =>{
    return {wsname, worksheet,defaultPane,header,tooltip,title,totalPane,totalHeader,grandTotalPane,grandTotalHeader}
  }


export let formatWorksheet = (wsXML) =>{
let wsFormats = []
if (wsXML){
    let worksheets = wsXML.children

    let worksheetsNameArr = []
    let worksheetsArr = []
    let cellArr = []
    let cellSubTotalArr = []
    let cellTotalArr = []
    let labelArr = []
    let tooltipArr = []
    let titleArr = []
    let headerTotalArr =[]
    let headerSubTotalArr =[]

    // loop over worksheets
    for (let a = 0;a<worksheets.length;a++){
    let wsname = worksheets[a].attributes.name
    worksheetsNameArr.push(wsname)
    let wsChildren = worksheets[a].children

    // loop over worksheet childrens (table,simple-id) to get into the table
    for (let b = 0;b<wsChildren.length;b++){

        if (wsChildren[b].name==='table'){
        let tableChildren = wsChildren[b].children
        for (let c = 0;c<tableChildren.length;c++){
            //loop over tableChildren (view,style,panes,rows,cols) to find style

            if (tableChildren[c].name==='style'){
            let styleChildren = tableChildren[c].children

            //create default Instances
            let styleRuleWorksheetInstance =  
                                            {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}
            let styleRuleCellInstance =  
                                            {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}
            let styleRuleCellSubTotalInstance =  
                                            {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}
            let styleRuleCellTotalInstance =  
                                            {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}
            let styleRuleLabelInstance = {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}
            let styleRuleTooltipInstance = {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}
            let styleRuleTitleInstance = {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}
            let styleRuleHeaderTotalInstance = {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}
            let styleRuleHeaderSubTotalInstance = {'font-family':'default',
                                            'font-size':'default',
                                            'font-weight':'default',
                                            'font-style':'default',
                                            'text-decoration':'default',
                                            'color':'default'}

            if (styleChildren.length===0){
                worksheetsArr.push(styleRuleWorksheetInstance)
                cellArr.push(styleRuleCellInstance)
                cellSubTotalArr.push(styleRuleCellSubTotalInstance)
                cellTotalArr.push(styleRuleCellTotalInstance)
                labelArr.push(styleRuleLabelInstance)
                tooltipArr.push(styleRuleTooltipInstance)
                titleArr.push(styleRuleTitleInstance)
                headerTotalArr.push(styleRuleHeaderTotalInstance)
                headerSubTotalArr.push(styleRuleHeaderSubTotalInstance)

                let worksheetFormatInstance = worksheetFormatFactory(wsname,styleRuleWorksheetInstance,styleRuleCellInstance,styleRuleCellSubTotalInstance,styleRuleCellTotalInstance,styleRuleLabelInstance,styleRuleTooltipInstance,styleRuleTitleInstance,styleRuleHeaderTotalInstance,styleRuleHeaderSubTotalInstance) 
                wsFormats.push(worksheetFormatInstance)

            } else {

            // check the attributes to find correct element
            for (let d = 0;d<styleChildren.length;d++){
                let styleRuleChildren = styleChildren[d].children
                let element = styleChildren[d].attributes.element
                if (element ==='worksheet'){
                for (let e = 0;e<styleRuleChildren.length;e++){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleWorksheetInstance[attr] = value 
                }
                worksheetsArr.push(styleRuleWorksheetInstance)
                } else if (element ==='cell'){
                for (let e = 0;e<styleRuleChildren.length;e++){
                    let myObj = styleRuleChildren[e].attributes

                    let ObjLen = Object.keys(myObj).length
                    if (ObjLen===2){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleCellInstance[attr] = value 
                    
                    } else if (Object.values(myObj)[1]==="subtotal"){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleCellSubTotalInstance[attr] = value                           

                    } else if (Object.values(myObj)[1]==="total"){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleCellTotalInstance[attr] = value                           
                    }
                     
                }
                cellArr.push(styleRuleCellInstance)
                cellSubTotalArr.push(styleRuleCellSubTotalInstance)
                cellTotalArr.push(styleRuleCellTotalInstance)

                } else if (element ==='label'){
                for (let e = 0;e<styleRuleChildren.length;e++){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleLabelInstance[attr] = value 
                    // console.log(attr,value)
                }
                labelArr.push(styleRuleLabelInstance)
                } else if (element ==='tooltip'){
                for (let e = 0;e<styleRuleChildren.length;e++){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleTooltipInstance[attr] = value 
                    // console.log(attr,value)
                }
                tooltipArr.push(styleRuleTooltipInstance)
                } else if (element ==='title'){
                for (let e = 0;e<styleRuleChildren.length;e++){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleTitleInstance[attr] = value 
                    // console.log(attr,value)
                }
                titleArr.push(styleRuleTitleInstance)
                } else if (element ==='header'){
                for (let e = 0;e<styleRuleChildren.length;e++){
                    let myObj = styleRuleChildren[e].attributes

                    if (Object.values(myObj)[1]==="subtotal"){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleHeaderSubTotalInstance[attr] = value                           

                    } else if (Object.values(myObj)[1]==="total"){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleHeaderTotalInstance[attr] = value                           
                    }
        
                }
                headerTotalArr.push(styleRuleHeaderTotalInstance)
                headerSubTotalArr.push(styleRuleHeaderSubTotalInstance)
                }
                let worksheetFormatInstance = worksheetFormatFactory(wsname,styleRuleWorksheetInstance,styleRuleCellInstance,styleRuleCellSubTotalInstance,styleRuleCellTotalInstance,styleRuleLabelInstance,styleRuleTooltipInstance,styleRuleTitleInstance,styleRuleHeaderTotalInstance,styleRuleHeaderSubTotalInstance,) 
                wsFormats.push(worksheetFormatInstance)
            }
            }

            }

        }
        }

    }

    }


    // console.log(wsFormats)
}

}