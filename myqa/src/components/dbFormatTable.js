import React, { useState, useEffect, useMemo } from 'react'
import {formatDashboard} from '../functions/dashboardFormatFunc'


export const DbFormatTable = ({data}) =>{

    const [stateFormatDb,setstateFormatDb] = useState(null)

    useEffect(()=>{
        if (data){
            setstateFormatDb(formatDashboard(data))

        } 
    },[data])
    

    let renderFixedTableHeader =()=>{
        return (
            <div className='table--header'>
                <div>dbname</div>
                <div>fontWeight</div>
                <div>fontStyle</div>
                <div>textDecoration</div>
                <div>fontFamily</div>
                <div>fontSize</div>
                <div>color</div>
                <div>textAlign</div>
                <div>backgroundColor</div>
                <div>borderWidth</div>
                <div>borderColor</div>
                <div>borderStyle</div>
                <div>textOrientation</div>
                <div>verticalAlign</div>
                <div>wrap</div>
            </div>
 
        )
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
                    <div>{value.textOrientation}</div>
                    <div>{value.verticalAlign}</div>
                    <div>{value.wrap}</div>
                </div>
            )
        })
    }
    }
    let RenderTable=()=>{
        return(
            <div>
                <div className='table'>
                    <div>Dash Title</div>
                    <div >{renderFixedTableHeader()}</div>
                    <div >{renderTableContent(stateFormatDb,"dashTitle")}</div>
                </div>
                <div className='table'>
                    <div>Dash Text</div>
                    <div >{renderFixedTableHeader()}</div>
                    <div >{renderTableContent(stateFormatDb,"dashText")}</div>
                </div>
                <div className='table'>
                    <div>dashSubTitle</div>
                    <div >{renderFixedTableHeader()}</div>
                    <div >{renderTableContent(stateFormatDb,"dashSubTitle")}</div>
                </div>
                <div className='table'>
                    <div>table</div>
                    <div >{renderFixedTableHeader()}</div>
                    <div >{renderTableContent(stateFormatDb,"table")}</div>
                </div>
            </div>
            )
    }

    if (stateFormatDb){
        return <RenderTable />
    } else{
        return <div></div>
    }
}
