import React, { useState, useEffect, useMemo } from 'react'
import {dashboardSize} from '../functions/dashboardSizeFunc'


export const DbSize = ({data}) =>{

    const [stateSize,setstateSize] = useState(null)


    useEffect(()=>{
        if (data){
            setstateSize(dashboardSize(data))

        } else{
            console.log('data is empty')
        }
    },[data])
    

    let renderTableHeader = (arg)=>{
        console.log(stateSize)
        if (arg){
            let arg2 = arg[0]
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
                    <div>{value.dashboard}</div>
                    <div>{value.maxheight}</div>
                    <div>{value.maxwidth}</div>
                    <div>{value.minheight}</div>
                    <div>{value.minwidth}</div>

                </div>
            )
        })
        }
    }

    return(
       
        <div className='table'>
            <div className='table--header'>{renderTableHeader(stateSize)}</div>
            <div>{renderTableContent(stateSize)}</div>

        </div>
    )

}