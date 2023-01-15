let dashboardTitleRCFactory = (dbname,bold,fontalignment,fontcolor,fontname,fontsize,italic,value)=>{
    return {dbname,bold,fontalignment,fontcolor,fontname,fontsize,italic,value}
  }


  export let formatRC =  (dbXMLarg)=>{
    if (dbXMLarg){


      let dashboardTitleRCInstanceArr = []
      for (let a = 0;a<dbXMLarg.children.length;a++){

        let dbname = dbXMLarg.children[a].attributes.name
        let dashboardTitleRCInstance = dashboardTitleRCFactory(dbname,'default','default','default','default','default','default','default')

        let dashboardChildren = (dbXMLarg.children[a].children)
        for (let b = 0;b<dashboardChildren.length;b++) {
          if (dashboardChildren[b].name==='layout-options'){
            let run = (dashboardChildren[b].children[0].getElementsByTagName('run')) 
            if (run.length===0){
              dashboardTitleRCInstanceArr.push(dashboardTitleRCInstance)
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
              dashboardTitleRCInstance["bold"] = bold
              dashboardTitleRCInstance["fontalignment"] = fontalignment
              dashboardTitleRCInstance["fontcolor"] = fontcolor
              dashboardTitleRCInstance["fontname"] = fontname
              dashboardTitleRCInstance["fontsize"] = fontsize
              dashboardTitleRCInstance["italic"] = italic
              dashboardTitleRCInstance["underline"] = underline
              dashboardTitleRCInstance["value"] = value

              

            }
          }
        }
        dashboardTitleRCInstanceArr.push(dashboardTitleRCInstance)
      }
    }
    
  }