let filterFactory = (wsname,field) =>{
    return {wsname,field}
  }


  export let wsFilterListFunc =  (wsXMLarg)=>{
    if (wsXMLarg){
      let wsFiltersArr = []

      for (let a = 0;a<wsXMLarg.children.length;a++){

        let wsname = wsXMLarg.children[a].attributes.name
       
        let worksheetChildren = (wsXMLarg.children[a].children)
        for (let b = 0 ; b<worksheetChildren.length;b++){
          if (worksheetChildren[b].name==='table'){
            let worksheetChildrenChildren = worksheetChildren[b].children
            
            for (let c = 0 ; c<worksheetChildrenChildren.length;c++){
              if (worksheetChildrenChildren[c].name==='view'){

                let viewChildren = worksheetChildrenChildren[c].children

                for (let g = 0 ; g<viewChildren.length;g++){
                  if (viewChildren[g].name==='filter'){
                    let column = (viewChildren[g].attributes.column)
                    let filterNameInstance = filterFactory(wsname,column)
                    wsFiltersArr.push(filterNameInstance)
                  }
                }
              }
            }
          }
        }
        

      }
      console.log(wsFiltersArr)


    }
    }