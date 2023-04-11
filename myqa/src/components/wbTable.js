import React, { useState, useEffect, useMemo } from 'react'

import {formatWorkbook} from '../functions/workbookFormatFunc'
import {dashboardSize} from '../functions/dashboardSizeFunc'

export const WbTable = ({data}) =>{

    const [formatWorkbookState,setformatWorkbookState] = useState(null)
    const [dashboardSizeState,setdashboardSizeState] = useState(null)


    useEffect(()=>{
        if (data){
            setformatWorkbookState(formatWorkbook(data))
            // setdashboardSize(dashboardSize(data))
            // console.log(data)

        } else{
            console.log('data is empty')
        }
    },[data])
    

    useEffect(()=>{
        if(formatWorkbookState){
            console.log(formatWorkbookState)
            

        }
    },[formatWorkbookState])

    let renderTableHeader = (arg)=>{
        if (arg){
            let arg2 = arg[0]
            console.log(Object.keys(arg2))
            return Object.keys(arg2).map((obj,i)=>{
                
                return (
                    <div key={obj}>
                        {obj}
                    </div>
                )
            })
        }
    }

    let renderTableContent= (arg)=>{
        if (arg){
        return Object.entries(arg).map(([key,value],i)=>{
            return (
         
                <div className='table--content' key={key}>
                    <div>{value.wsname}</div>
                    <div>{value.bold}</div>
                    <div>{value.fontalignment}</div>
                    <div>{value.fontcolor}</div>
                    <div>{value.fontname}</div>
                    <div>{value.fontsize}</div>
                    <div>{value.italic}</div>
                    <div>{value.underline}</div>
                    <div>{value.value}</div>
                </div>
            )
        })
        }
    }

    return(
       
        <div className='table'>
            {/* <div className='table--header'>{renderTableHeader(formatWorkbook)}</div>
            <div>{renderTableContent(formatWorkbook)}</div> */}
{/* <div>{formatWorkbookState}</div> */}
        </div>
    )

}