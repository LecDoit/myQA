import React, { useState, useEffect, useMemo } from 'react'

// import {formatWorkbook} from '../functions/workbookFormatFunc'


export const WbTable = (props) =>{

    // const [formatWorkbookState,setformatWorkbookState] = useState(null)
    const [formatWorkbook,setFormatWorkbookClicked] = useState(false)
    const [fonts,setFontsClicked] = useState(false)
    const [lines,setLinesClicked] = useState(false)
    const [all,setAllClicked] = useState(false)
    const [worksheets,setWorksheetsClicked] = useState(false)
    const [tooltips,setTooltips] = useState(false)
    const [worksheetTitles,setWorksheetTitles] = useState(false)
    const [dashboardTitles,setDashboardTitles] = useState(false)
    const [storyTitle,setStoryTitle] = useState(false)
    const [gridline,setGridlineClicked] = useState(false)
    const [zeroline,setZerolineClicked] = useState(false)
    const [trendline,setTrendlineClicked] = useState(false)
    const [refline,setReflineClicked] = useState(false)
    const [dropline,setDroplineClicked] = useState(false)
    const [axis,setAxisClicked] = useState(false)




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

        return(
            <div>
                <div onClick={()=>{setFormatWorkbookClicked(prev=>!prev)}} className='table'>Format Workbook
                    <div>{formatWorkbook===false ? "+":"-"}</div>
                </div>
                <div className={formatWorkbook===true ? 'content show':'content'}> 

                    <div>
                        <div onClick={()=>{setFontsClicked(prev=>!prev)}} className='table--subtitle'>Fonts
                            <div>{fonts===false ? "+":"-"}</div>
                        </div>                
                        <div className={fonts===true ? 'content show':'content'}>

                            <div>
                                <div onClick={()=>{setAllClicked(prev=>!prev)}} className='table--sub--subtitle'>All
                                    <div>{all===false ? "+":"-"}</div>
                                </div>
                                <div className={all===true ? 'content show':'content'}>{renderAllTableContent(props.data,"all")}
                                </div>
                            </div>
                            
                            <div>
                                <div onClick={()=>{setWorksheetsClicked(prev=>!prev)}} className='table--sub--subtitle'>WorkSheets
                                    <div>{worksheets===false ? "+":"-"}</div>
                                </div>
                                <div className={worksheets===true ? 'content show':'content'}>{renderAllTableContent(props.data,'worksheet')}
                                </div>   
                            </div>

                            <div>
                                <div onClick={()=>{setTooltips(prev=>!prev)}}className='table--sub--subtitle'>Tooltips
                                    <div>{tooltips===false ? "+":"-"}</div>
                                </div>         
                                <div className={tooltips===true ? 'content show':'content'}>{renderAllTableContent(props.data,'tooltip')}
                                </div>    
                            </div>  

                            <div>
                                <div onClick={()=>{setWorksheetTitles(prev=>!prev)}}className='table--sub--subtitle'>Worksheet Titles
                                    <div>{worksheetTitles===false ? "+":"-"}</div>
                                </div>
                                <div className={worksheetTitles===true ? 'content show':'content'}>{renderAllTableContent(props.data,'title')}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setDashboardTitles(prev=>!prev)}} className='table--sub--subtitle'>Dashboard Titles
                                    <div>{dashboardTitles===false ? "+":"-"}</div>
                                </div>

                                <div className={dashboardTitles===true ? 'content show':'content'}>{renderAllTableContent(props.data,'dashTitle')}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setStoryTitle(prev=>!prev)}} className='table--sub--subtitle'>Story Titles
                                    <div>{storyTitle===false ? "+":"-"}</div>
                                </div> 

                                <div className={storyTitle===true ? 'content show':'content'}>{renderAllTableContent(props.data,'storyTitle')}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div onClick={()=>{setLinesClicked(prev=>!prev)}} className='table--subtitle'> Lines
                            <div>{lines===false ? "+":"-"}</div>
                        </div>

                        <div className={lines===true ? 'content show':'content'}>

                            <div>
                                <div onClick={()=>{setGridlineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    Grid Lines
                                    <div>{gridline===false ? "+":"-"}</div>
                                </div>
                                <div className={gridline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"gridline")}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setZerolineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    Zero Lines
                                    <div>{zeroline===false ? "+":"-"}</div>
                                </div>
                                <div className={zeroline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"zeroline")}
                                </div>
                            </div>
                            <div>
                                <div onClick={()=>{setTrendlineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    Trend Lines
                                    <div>{trendline===false ? "+":"-"}</div>
                                </div>
                                <div className={trendline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"trendline")}
                                </div>
                            </div>


                            <div>
                                <div onClick={()=>{setReflineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    Ref Lines
                                    <div>{refline===false ? "+":"-"}</div>
                                </div>
                                <div className={refline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"refline")}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setDroplineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    Drop Lines
                                    <div>{dropline===false ? "+":"-"}</div>
                                </div>
                                <div className={dropline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"dropline")}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setAxisClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    Axis
                                    <div>{axis===false ? "+":"-"}</div>
                                </div>

                                <div className={axis===true ? 'content show':'content'} >{renderAllTableContent(props.data,"axis")}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
