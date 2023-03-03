let filterTitleRCFactory = (wsname,field,filtername,bold,fontalignment,fontcolor,fontname,fontsize,italic,underline)=>{
    return {wsname,field,filtername,bold,fontalignment,fontcolor,fontname,fontsize,italic,underline}
  }


export let filterTitleRC =  (wsXMLarg)=>{
    if (wsXMLarg){
      let wsFiltersArr = []

      let worksheetTitleRCInstanceArr = []
      for (let a = 0;a<wsXMLarg.children.length;a++){

        let wsname = wsXMLarg.children[a].attributes.name
        // let worksheetTitleRCInstance = worksheetTitleRCFactory(wsname,'default','default','default','default','default','default','default')

        let worksheetChildren = (wsXMLarg.children[a].children)
        for (let b = 0 ; b<worksheetChildren.length;b++){
          if (worksheetChildren[b].name==='table'){
            let worksheetChildrenChildren = worksheetChildren[b].children
            
            for (let c = 0 ; c<worksheetChildrenChildren.length;c++){

              if (worksheetChildrenChildren[c].name==='style'){
                let styleChildren = worksheetChildrenChildren[c].children

                for (let d = 0;d<styleChildren.length;d++){
                  

                  if (styleChildren[d].attributes.element==='quick-filter'){
                    let format = styleChildren[d].children

                    for (let e = 0;e<format.length;e++){
                      let formatAttr = format[e].attributes.attr
                      let formatField = format[e].attributes.field
                      let formatValue = format[e].attributes.value

                      let filterTitleRCInstance = filterTitleRCFactory(wsname,formatField,formatValue,'default','default','default','default','default','default')

                      let run = format[e].getElementsByTagName('run') 


                      let bold = run[0].attributes.bold
                      if (bold===undefined){
                        bold = 'default'
                      }  
                      let fontalignment = run[0].attributes.fontalignment
                      if (fontalignment===undefined){
                        fontalignment = 'default'
                      }
                      let fontcolor = run[0].attributes.fontcolor
                      if (fontcolor===undefined){
                        fontcolor = 'default'
                      }  
                      let fontname = run[0].attributes.fontname
                      if (fontname===undefined){
                        fontname = 'default'
                      } 
                      let fontsize = run[0].attributes.fontsize
                      if (fontsize===undefined){
                        fontsize = 'default'
                      } 
                      let italic = run[0].attributes.italic
                      if (italic===undefined){
                        italic = 'default'
                      } 
                      let underline = run[0].attributes.underline
                      if (underline===undefined){
                        underline = 'default'
                      } 
                      filterTitleRCInstance["bold"] = bold
                      filterTitleRCInstance["fontalignment"] = fontalignment
                      filterTitleRCInstance["fontcolor"] = fontcolor
                      filterTitleRCInstance["fontname"] = fontname
                      filterTitleRCInstance["fontsize"] = fontsize
                      filterTitleRCInstance["italic"] = italic
                      filterTitleRCInstance["underline"] = underline
                      worksheetTitleRCInstanceArr.push(filterTitleRCInstance)



                    }
             
                    
                  }
                }
              }
            }

            

          }
        }
        

      }

      console.log(worksheetTitleRCInstanceArr)

    }
    }