import React, { useState, useEffect, useMemo } from 'react'

import {worksheetFormatFilters} from '../functions/worksheetFilterFormat'


export const WsFilterFormatTable = ({data}) =>{

    const [stateWsFilterFormat,setStateWsFilterFormat] = useState(null)

    useEffect(()=>{
        if (data){
            setStateWsFilterFormat(worksheetFormatFilters(data))
        }
    },[data])

    let renderFixedTableHeader =(arg1)=>{
        if (arg1==='quick-filter'){
            return (
                <div className='table--header'>
                    <div>wsname</div>
                    <div>fontWeight</div>
                    <div>fontStyle</div>
                    <div>textDecoration</div>
                    <div>fontFamily</div>
                    <div>fontSize</div>
                    <div>color</div>
                    <div>backgroundColor</div>
                    <div>borderColor</div>
                    <div>borderStyle</div>
                    <div>borderWidth</div>
                </div>
     
            )
        } else if (arg1==='quick-filter-title'){
            return (
                <div className='table--header'>
                    <div>wsname</div>
                    <div>fontWeight</div>
                    <div>fontStyle</div>
                    <div>textDecoration</div>
                    <div>fontFamily</div>
                    <div>fontSize</div>
                    <div>color</div>
                </div>
     
            )

        }

    }

    let renderTableContent= (arg,arg2)=>{
        if (arg){

            if (arg2 ==='quickFilter'){
        return Object.entries(arg).map(([key,value],i)=>{
            return (
                <div className='table--content' key={i}>
                    <div>{value.wsname}</div>
                    <div>{value[arg2]['font-weight']}</div>
                    <div>{value[arg2]['font-style']}</div>
                    <div>{value[arg2]['text-decoration']}</div>
                    <div>{value[arg2]['font-family']}</div>
                    <div>{value[arg2]['font-size']}</div>
                    <div>{value[arg2]['color']}</div>
                    <div>{value[arg2]['background-color']}</div>
                    <div>{value[arg2]['border-color']}</div>
                    <div>{value[arg2]['border-style']}</div>
                    <div>{value[arg2]['border-width']}</div>

                    
                </div>
               
            )
        })
    } else if (arg2 ==='quickFilterTitle'){
        return Object.entries(arg).map(([key,value],i)=>{
            return (
                <div className='table--content' key={i}>
                    <div>{value.wsname}</div>
                    <div>{value[arg2]['font-weight']}</div>
                    <div>{value[arg2]['font-style']}</div>
                    <div>{value[arg2]['text-decoration']}</div>
                    <div>{value[arg2]['font-family']}</div>
                    <div>{value[arg2]['font-size']}</div>
                    <div>{value[arg2]['color']}</div>                  
                </div>
               
            )
        })

    }

    }
    }
    let RenderTable=()=>{
        return(
            <div>                    
                <div>Title
                    <div className='table'>

                        <div>Quick Filter Title</div>
                        <div >{renderFixedTableHeader('quick-filter-title')}</div>
                        <div >{renderTableContent(stateWsFilterFormat,'quickFilterTitle')}</div>
                    </div>
                </div>

                <div>Body
                    <div className='table'>

                        <div>Quick Filter</div>
                        <div >{renderFixedTableHeader('quick-filter')}</div>
                        <div >{renderTableContent(stateWsFilterFormat,'quickFilter')}</div>
                    </div>
                </div>


                
            </div>
            )
    }


    if (stateWsFilterFormat){
        return <RenderTable />
        
    } else{
        return <div></div>
    }
}
