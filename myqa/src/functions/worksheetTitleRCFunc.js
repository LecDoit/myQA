let worksheetTitleRCFactory = (wsname,bold,fontalignment,fontcolor,fontname,fontsize,italic,value)=>{
    return {wsname,bold,fontalignment,fontcolor,fontname,fontsize,italic,value}
  }


  export let formatWorksheetRC =  (dbXMLarg)=>{
    if (dbXMLarg){


      let worksheetTitleRCInstanceArr = []
      for (let a = 0;a<dbXMLarg.children.length;a++){

        let wsname = dbXMLarg.children[a].attributes.name
        let worksheetTitleRCInstance = worksheetTitleRCFactory(wsname,'default','default','default','default','default','default','default')

        let worksheetChildren = (dbXMLarg.children[a].children)
        for (let b = 0;b<worksheetChildren.length;b++) {
          if (worksheetChildren[b].name==='layout-options'){
            let run = (worksheetChildren[b].children[0].getElementsByTagName('run')) 
            if (run.length===0){
                worksheetTitleRCInstanceArr.push(worksheetTitleRCInstance)
            } else{

              let value = (run[0].value)

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
              worksheetTitleRCInstance["bold"] = bold
              worksheetTitleRCInstance["fontalignment"] = fontalignment
              worksheetTitleRCInstance["fontcolor"] = fontcolor
              worksheetTitleRCInstance["fontname"] = fontname
              worksheetTitleRCInstance["fontsize"] = fontsize
              worksheetTitleRCInstance["italic"] = italic
              worksheetTitleRCInstance["underline"] = underline
              worksheetTitleRCInstance["value"] = value
            }
          }
        }
        worksheetTitleRCInstanceArr.push(worksheetTitleRCInstance)
      }
      console.log(worksheetTitleRCInstanceArr)
    }
    
  }