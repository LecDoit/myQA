import React, { useState, useEffect, useMemo } from 'react'
import {formatDashboardRC} from '../functions/dashboardTitleRCFunc'

export const DbRCTable = ({data}) =>{

    const [stateRC,setstateRC] = useState(null)


    useEffect(()=>{
        if (data){
            setstateRC(formatDashboardRC(data))
 

        } else{
            console.log('data is empty')
        }
    },[data])
    

    useEffect(()=>{
        if(stateRC){

            console.log(stateRC)

        }
    },[stateRC])

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
                    <div>{value.dbname}</div>
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
            <div className='table--header'>{renderTableHeader(stateRC)}</div>
            <div>
          { renderTableContent(stateRC)}
          </div>

        </div>
    )

}