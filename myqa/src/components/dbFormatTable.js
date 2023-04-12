import React, { useState, useEffect, useMemo } from 'react'
import {formatDashboard} from '../functions/dashboardFormatFunc'



export const DbFormatTable = ({data}) =>{

    const [stateFormatDb,setstateFormatDb] = useState(null)


    useEffect(()=>{
        if (data){
            setstateFormatDb(formatDashboard(data))

        } else{
            console.log('data is empty')
        }
    },[data])
    

    useEffect(()=>{
        if (stateFormatDb){
            console.log(stateFormatDb)
        }
    },[stateFormatDb])

    let renderTableHeader = (arg,arg2)=>{

        if (arg){
            let argumentO = arg[arg2][0]
            console.log(arg)
            return Object.keys(argumentO).map((obj,i)=>{
            
                return (
                    <div key={obj}>
                        {obj}
                    </div>
                )
            })
        }
    }

   

    let renderTableContent= (arg,arg2)=>{
        if (arg){
            let argumentO = arg[arg2]

        return Object.entries(argumentO).map(([key,value],i)=>{

            return (
      
                <div className='table--content' key={i}>
                    <div>{value.dbname}</div>
                    <div>{value.fontWeight}</div>
                    <div>{value.fontStyle}</div>
                    <div>{value.textDecoration}</div>
                    <div>{value.fontFamily}</div>
                    <div>{value.fontSize}</div>
                    <div>{value.color}</div>
                    <div>{value.textAlign}</div>
                    <div>{value.backgroundColor}</div>
                    <div>{value.borderWidth}</div>
                    <div>{value.borderColor}</div>
                    <div>{value.borderStyle}</div>
                </div>
            )
        })
    }
    }

    return(
    <div>
        <div className='table'>
            <div>Dash Title</div>
            <div className='table--header'>{renderTableHeader(stateFormatDb,"dashTitle")}</div>
            <div >{renderTableContent(stateFormatDb,"dashTitle")}</div>
        </div>
        <div className='table'>
            <div>Dash Text</div>
            <div className='table--header'>{renderTableHeader(stateFormatDb,"dashText")}</div>
            <div >{renderTableContent(stateFormatDb,"dashText")}</div>
        </div>
    </div>
    )

}
// need to create dbname in each case