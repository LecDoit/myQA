import React, { useState, useEffect, useMemo } from 'react'

import {formatWorkbook} from '../functions/workbookFormatFunc'


export const WbTable = ({data}) =>{

    const [formatWorkbookState,setformatWorkbookState] = useState(null)

    useEffect(()=>{
        if (data){
            setformatWorkbookState(formatWorkbook(data))

        
        }
    },[data])
    

    let renderAllTableContent= (arg,arg2)=>{
        if (arg){
      
        return Object.entries(arg[arg2]).map(([key,value],i)=>{
            return (
         
                <div className='table--header' key={key}>
                    <div>{key}</div>
                    <div>{value}</div>
                    
                </div>
            )
        })
        }
    }

    let RenderTable = () =>{
        return(
            <div className='table'>
                <div id='fonts'>Fonts
                    <div>All
                        <div>{renderAllTableContent(formatWorkbookState,"all")}</div>
                    </div>
                    <div>WorkSheets</div>
                    <div>{renderAllTableContent(formatWorkbookState,'worksheet')}</div>
        
                    <div>Tooltips</div>
                    <div>{renderAllTableContent(formatWorkbookState,'tooltip')}</div>
        
                    <div>Worksheet Titles</div>
                    <div>{renderAllTableContent(formatWorkbookState,'title')}</div>
        
                    <div>Dashboard Titles</div>
                    <div>{renderAllTableContent(formatWorkbookState,'dashTitle')}</div>
        
                    <div>Story Titles</div>
                    <div>{renderAllTableContent(formatWorkbookState,'storyTitle')}</div>
                </div>
                <div id='lines'>Lines
                    <div>Grid Lines</div>
                    <div>{renderAllTableContent(formatWorkbookState,'gridline')}</div>
        
                    <div>Zero Lines</div>
                    <div>{renderAllTableContent(formatWorkbookState,'zeroline')}</div>
        
                    <div>Trend Lines</div>
                    <div>{renderAllTableContent(formatWorkbookState,'trendline')}</div>
        
                    <div>Reference Lines</div>
                    <div>{renderAllTableContent(formatWorkbookState,'refline')}</div>
        
                    <div>Drop Lines</div>
                    <div>{renderAllTableContent(formatWorkbookState,'dropline')}</div>
        
                    <div>Axis Rulers</div>
                    <div>{renderAllTableContent(formatWorkbookState,'axis')}</div>
                </div>
            </div>
        )
    }
    if (formatWorkbookState){
        return <RenderTable />
    } else {
        return <div></div>
    }
            
        


}