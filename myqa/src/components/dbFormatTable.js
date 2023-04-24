import React, { useState, useEffect, useMemo } from 'react'
import {formatDashboard} from '../functions/dashboardFormatFunc'
import Chevron from '../chevron.svg'


export const DbFormatTable = (props) =>{

    const [formatDashboard,setFormatDashboardClicked] = useState(false)
    const [dashboardShading,setDashboardShadingClicked] = useState(false)
    const [dashboardTitle,setDashboardTitleClicked] = useState(false)
    const [dashboardSubTitle,setDashboardSubTitleClicked] = useState(false)
    const [textObjects,setTextObjectsClicked] = useState(false)

    // console.log(props.data)
    

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
    // let RenderTable=()=>{
        return(
            <div>
                <div onClick={()=>{setFormatDashboardClicked(prev=>!prev)}} className='table'>
                    <div className='title'>Format Dashboard</div>
                    <img  className={formatDashboard===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                </div>
                <div className={formatDashboard===true ? 'content show':'content'}>
                    <div>
                        <div onClick={()=>{setDashboardShadingClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Dashboard Shading</div>
                                <img  className={dashboardShading===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                            </div>   
                        <div className={dashboardShading===true ? 'content show':'content'}>
                                <div >{renderFixedTableHeader()}</div>
                                <div >{renderTableContent(props.data,"table")}</div>
                        </div>
                    </div>

                    <div>
                        <div onClick={()=>{setDashboardTitleClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Dashboard Title</div>
                            <img  className={dashboardTitle===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div>  
                        <div className={dashboardTitle===true ? 'content show':'content'}>
                            <div >{renderFixedTableHeader()}</div>
                            <div >{renderTableContent(props.data,"dashTitle")}</div>
                        </div>

                    </div>

                    <div>
                        <div onClick={()=>{setDashboardSubTitleClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Worksheet Titles</div>
                            <img  className={dashboardSubTitle===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div>  
                        <div className={dashboardSubTitle===true ? 'content show':'content'}>
                            <div >{renderFixedTableHeader()}</div>
                            <div >{renderTableContent(props.data,"dashSubTitle")}</div>
                        </div>


                    </div>
                    <div>
                        <div onClick={()=>{setTextObjectsClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Text Objects</div>
                            <img  className={textObjects===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div> 
                        <div className={textObjects===true ? 'content show':'content'}>
                            <div >{renderFixedTableHeader()}</div>
                            <div >{renderTableContent(props.data,"dashText")}</div>
                        </div>

                    </div>
                </div>
            </div>
            )
    }

