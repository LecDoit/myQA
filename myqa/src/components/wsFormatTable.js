import React, { useState, useEffect, useMemo } from 'react'
import {formatWorksheet} from '../functions/worksheetFormatFunc'


export const WsFormatTable = ({data}) =>{

    const [stateFormatWs,setstateFormatWs] = useState(null)

    useEffect(()=>{
        if (data){
            setstateFormatWs(formatWorksheet(data))
        }
    },[data])




    let renderFixedTableHeader =()=>{
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

    let renderTableContent= (arg,arg2)=>{
        if (arg){

        return Object.entries(arg).map(([key,value],i)=>{

            return (
                <div className='table--content' key={i}>
                    <div>{value.wsname}</div>
                    <div>{value[arg2]['font-family']}</div>
                    <div>{value[arg2]['font-weight']}</div>
                    <div>{value[arg2]['font-style']}</div>
                    <div>{value[arg2]['text-decoration']}</div>
                    <div>{value[arg2]['font-size']}</div>
                    <div>{value[arg2]['color']}</div>
                </div>
               
            )
        })
    }
    }
    let RenderTable=()=>{
        return(
            <div>                    
                <div>Default
                    <div className='table'>

                        <div>Worksheet</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"worksheet")}</div>
                    </div>

                    <div className='table'>
                        
                        <div>Pane</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"defaultPane")}</div>
                    </div>

                    <div className='table'>
                        
                        <div>Header</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"header")}</div>
                    </div>

                    <div className='table'>
                        
                        <div>Tooltip</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"tooltip")}</div>
                    </div>

                    <div className='table'>
                        
                        <div>Title</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"title")}</div>
                    </div>
                </div>

                <div>Total
                    <div className='table'>

                        <div>Pane</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"totalPane")}</div>
                    </div>

                    <div className='table'>
                        
                        <div>Header</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"totalHeader")}</div>
                    </div>
                </div>

                <div>Grand Total
                    <div className='table'>

                        <div>Pane</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"grandTotalPane")}</div>
                    </div>

                    <div className='table'>
                        
                        <div>Header</div>
                        <div >{renderFixedTableHeader()}</div>
                        <div >{renderTableContent(stateFormatWs,"grandTotalHeader")}</div>
                    </div>
                </div>
                
            </div>
            )
    }


    if (stateFormatWs){
        return <RenderTable />
    } else{
        return <div></div>
    }
}
