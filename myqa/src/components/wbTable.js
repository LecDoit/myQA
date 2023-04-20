import React, { useState, useEffect, useMemo } from 'react'

import {formatWorkbook} from '../functions/workbookFormatFunc'


export const WbTable = (props) =>{

    const [formatWorkbookState,setformatWorkbookState] = useState(null)
    const [clicked,setClicked] = useState(false)
    const [clicked2,setClicked2] = useState(false)

    const toggle = (stat,setstat) =>{
        console.log('clicked!')

        if (stat===false){
            console.log('is false after clicked but changed to true')
            return setstat(true)
        } else{
            console.log('dafuq?')
        }
        setstat(false)
    }


    useEffect(()=>{
        if (props.data){
            props.valueCheck(true)
            
            
            
            setformatWorkbookState(formatWorkbook(props.data))

        
        }
    },[props.data])
    


    let renderAllTableContent= (arg,arg2)=>{
        if (arg){
      
        return Object.entries(arg[arg2]).map(([key,value],i)=>{
            return (
         
                <div className='table--row' key={key}>
                    <div className='key'>{key}</div>
                    <div className='value'>{value}</div>
                    
                </div>
            )
        })
        }
    }

    let RenderTable = () =>{
        return(
            <div onClick={()=>toggle(clicked,setClicked)} id='formatWorkbook' className='table'>Format Workbook
            <div>{clicked===false ? "+":"-"}</div>
                <div onClick={()=>toggle(clicked2,setClicked2)} className='table--subtitle'>Fonts
                    <div className='table--sub--subtitle'>All
                        <div>{renderAllTableContent(formatWorkbookState,"all")}</div>
                    </div>
                    <div className='table--sub--subtitle'>WorkSheets
                        <div>{renderAllTableContent(formatWorkbookState,'worksheet')}</div>
                    </div>

        
                    <div className='table--sub--subtitle'>Tooltips
                        <div>{renderAllTableContent(formatWorkbookState,'tooltip')}</div>
                    </div>

                    <div className='table--sub--subtitle'>Worksheet Titles
                        <div>{renderAllTableContent(formatWorkbookState,'title')}</div>
                    </div>
                    
        
                    <div className='table--sub--subtitle'>Dashboard Titles
                        <div>{renderAllTableContent(formatWorkbookState,'dashTitle')}</div>
                    </div>
                    
        
                    <div className='table--sub--subtitle'>Story Titles
                        <div>{renderAllTableContent(formatWorkbookState,'storyTitle')}</div>
                    </div> 
                    
                </div>
                <div className='table--subtitle' id='lines'>Lines
                    <div className='table--sub--subtitle'>Grid Lines
                         <div>{renderAllTableContent(formatWorkbookState,'gridline')}</div>
        
                    </div>

                    <div className='table--sub--subtitle'>Zero Lines
                        <div>{renderAllTableContent(formatWorkbookState,'zeroline')}</div>
                    </div>

        
                    <div className='table--sub--subtitle'>Trend Lines
                         <div>{renderAllTableContent(formatWorkbookState,'trendline')}</div>
                    </div>

        
                    <div className='table--sub--subtitle'>Reference Lines
                        <div>{renderAllTableContent(formatWorkbookState,'refline')}</div>
                    </div>

        
                    <div className='table--sub--subtitle'>Drop Lines
                        <div>{renderAllTableContent(formatWorkbookState,'dropline')}</div>
                    </div>

        
                    <div className='table--sub--subtitle'>Axis Rulers
                        <div>{renderAllTableContent(formatWorkbookState,'axis')}</div>
                    </div>

                </div>
            </div>
        )
    }
    if (formatWorkbookState){
        return (
        <div id='formatWorkbookTable'>
            <div  id='dashboard--title' >{props.fileName}</div>
            <RenderTable />
        </div>
        )
    } else {
        return <div></div>
    }
            
        


}