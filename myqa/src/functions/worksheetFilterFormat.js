
let filterFormatFactory = (wsname,quickFilter,quickFilterTitle) =>{
    return {wsname,quickFilter,quickFilterTitle}
}


export  let worksheetFormatFilters = (wsXML) =>{
    let formatFilterAndSetControls = []
    if (wsXML){

      let quickFilterArr = []
      let quickFilterTitleArr = []

      let worksheets = wsXML.children
      // loop over worksheets
      for (let a = 0;a<worksheets.length;a++){
        let wsname = worksheets[a].attributes.name


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
                let styleRuleQuickFilterInstance =  
                                          {'wsname':wsname,
                                            'font-family':'default',
                                          'font-size':'default',
                                          'font-weight':'default',
                                          'font-style':'default',
                                          'text-decoration':'default',
                                          'color':'default',
                                          'background-color':'default',
                                          'border-style':'default',
                                          'border-width':'default',
                                          'border-color':'default'}
                let styleRuleQuickFilterTitleInstance =  
                                          {'wsname':wsname,
                                          'font-family':'default',
                                          'font-size':'default',
                                          'font-weight':'default',
                                          'font-style':'default',
                                          'text-decoration':'default',
                                          'color':'default'}
                                          
                if (styleChildren.length===0){
                quickFilterArr.push(styleRuleQuickFilterInstance)
                quickFilterTitleArr.push(styleRuleQuickFilterTitleInstance)

                let filterFormatInstance = filterFormatFactory(wsname,styleRuleQuickFilterInstance,styleRuleQuickFilterTitleInstance)


                formatFilterAndSetControls.push(filterFormatInstance)


              } else {
                // check the attributes to find correct element

                for (let d = 0;d<styleChildren.length;d++){
                  let styleRuleChildren = styleChildren[d].children
                  let element = styleChildren[d].attributes.element



                  if (element ==='quick-filter'){                
                    for (let e = 0;e<styleRuleChildren.length;e++){
                    let attr = styleRuleChildren[e].attributes.attr
                    let value = styleRuleChildren[e].attributes.value
                    styleRuleQuickFilterInstance[attr] = value    

                    }
                  // quickFilterArr.push(styleRuleQuickFilterInstance)
                  }
                  if (element ==='quick-filter-title'){     
        
                    for (let e = 0;e<styleRuleChildren.length;e++){
                      let attr = styleRuleChildren[e].attributes.attr
                      let value = styleRuleChildren[e].attributes.value
                      styleRuleQuickFilterTitleInstance[attr] = value    
                    }
                  }
                }
                let filterFormatInstance = filterFormatFactory(wsname,styleRuleQuickFilterInstance,styleRuleQuickFilterTitleInstance)
                formatFilterAndSetControls.push(filterFormatInstance)
              }
              }
            }
          }
        }
      }

      return formatFilterAndSetControls
    }
  }