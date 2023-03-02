const sizeFactory = (dashboard,maxheight,maxwidth,minheight,minwidth) => {
    return { dashboard,maxheight,maxwidth,minheight,minwidth }
    }


export let dashboardSize = (xmlArg) =>{


    let dashSizeInstanceArr = []

    if (xmlArg){
        for (let a = 0 ; a< xmlArg.children.length; a++){
        let dbname = (xmlArg.children[a].attributes.name)
        let dashboardChildren = xmlArg.children[a].children
        for (let b = 0 ;b<dashboardChildren.length;b++){
            if (dashboardChildren[b].name==='size'){

                let sizingMode = dashboardChildren[b].attributes["sizing-mode"]
                if (sizingMode==='automatic'){
                let dashSizeInstance = sizeFactory(dbname,'automatic','automatic','automatic','automatic','automatic')
                dashSizeInstanceArr.push(dashSizeInstance)
                } else{
                let maxHeight = dashboardChildren[b].attributes["maxheight"]
                let maxWidth = dashboardChildren[b].attributes["maxwidth"]
                let minHeight = dashboardChildren[b].attributes["minheight"]
                let minWidth = dashboardChildren[b].attributes["minwidth"]
                let dashSizeInstance = sizeFactory(dbname,maxHeight,maxWidth,minHeight,minWidth)
                dashSizeInstanceArr.push(dashSizeInstance)
                }

            }
        }
        }
        console.log(dashSizeInstanceArr)
    }

    }