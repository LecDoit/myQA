
let dashboardStyleFactory = (axis, worksheet,dropline,refline,gridline,zeroline,trendline,title,dashTitle,storyTitle,tooltip,all)=>{
return {axis, worksheet,dropline,refline,gridline,zeroline,trendline,title,dashTitle,storyTitle,tooltip,all}
}


export let formatWorkbook = (workbookXML) =>{
    let dashboardStyleInstance
    let axis = {"stroke-color":'default',
    "stroke-size":'default',
    "line-pattern-only":'default',
    "tick-color":'default'}

    let worksheet = {'font-family':'default',
                  'font-weight':'default',
                  'font-style':'default',
                  'text-decoration':'default',
                  'font-size':'default',
                  'color':'default'}

    let dropline = {'stroke-color':'default',
                  'stroke-size':'default',
                  'line-pattern-only':'default',}
    let refline = {'stroke-color':'default',
                  'stroke-size':'default',
                  'line-pattern-only':'default',}
    let gridline = {'stroke-color':'default',
                  'stroke-size':'default',
                  'line-pattern-only':'default',
                  'line-visibility':'default'}
    let zeroline = {'stroke-color':'default',
                    'line-visibility':'default',
                    'stroke-size':'default',
                    'line-pattern-only':'default'}
    let trendline = {'stroke-color':'default',
                    'stroke-size':'default',
                    'line-pattern-only':'default'}

    let title = {'font-family':'default',
                  'font-weight':'default',
                  'font-style':'default',
                  'text-decoration':'default',
                  'font-size':'default',
                  'color':'default'}
    let dashTitle = {'font-family':'default',
                  'font-weight':'default',
                  'font-style':'default',
                  'text-decoration':'default',
                  'font-size':'default',
                  'color':'default'}
    let storyTitle = {'font-family':'default',
                  'font-weight':'default',
                  'font-style':'default',
                  'text-decoration':'default',
                  'font-size':'default',
                  'color':'default'}
    let tooltip = {'font-family':'default',
                  'color':'default',
                  'font-size':'default',
                  'font-style':'default',
                  'text-decoration':'default',
                  'font-weight':'default'}
    let all = {'font-family':'default',
            'color':'default'}
    if (workbookXML){
      let styleRuleArr = (workbookXML.children)


      for (let a = 0;a<styleRuleArr.length;a++){
        let element = styleRuleArr[a].attributes.element


        if (element ==='axis'){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            axis[attr] = value
          }
        } else if (element ==='worksheet'){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            worksheet[attr] = value
        }
        } else if (element==='dropline'){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            dropline[attr] = value
        }
        } else if(element==='refline'){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            refline[attr] = value
          }

        } else if(element==='gridline'){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            gridline[attr] = value

          }
        } else if(element==="zeroline"){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            zeroline[attr] = value
        }
        } else if(element==="trendline"){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            trendline[attr] = value
        }
        } else if(element==="title"){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            title[attr] = value
        }
        } else if(element==="dash-title"){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            dashTitle[attr] = value
        }
        } else if(element==="story-title"){
          let format = styleRuleArr[a].children
          for (let b = 0 ; b<format.length;b++){
            let attr = (format[b].attributes.attr)
            let value = (format[b].attributes.value)
            storyTitle[attr] = value
        }
        } else if(element==="tooltip"){
            let format = styleRuleArr[a].children
            for (let b = 0 ; b<format.length;b++){
              let attr = (format[b].attributes.attr)
              let value = (format[b].attributes.value)
              tooltip[attr] = value
          }
        } else if(element==="all"){
            let format = styleRuleArr[a].children
            for (let b = 0 ; b<format.length;b++){
              let attr = (format[b].attributes.attr)
              let value = (format[b].attributes.value)
              all[attr] = value
          }
        }
       }

       dashboardStyleInstance = dashboardStyleFactory(axis,worksheet,dropline,refline,gridline,zeroline,trendline,title,dashTitle,storyTitle,tooltip,all)

    } else {
      dashboardStyleInstance = dashboardStyleFactory(axis,worksheet,dropline,refline,gridline,zeroline,trendline,title,dashTitle,storyTitle,tooltip,all)

    }
    console.log(dashboardStyleInstance)
      
  }