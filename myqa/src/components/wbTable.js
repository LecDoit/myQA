import React, { useState, useEffect, useMemo } from 'react'
import Chevron from '../chevron.svg'




export const WbTable = (props) =>{

  
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
                <div onClick={()=>{setFormatWorkbookClicked(prev=>!prev)}} className='table'>
                    <div className='title'>Format Workbook</div>
                    <img  className={formatWorkbook===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                </div>
                <div className={formatWorkbook===true ? 'content show':'content'}> 

                    <div>
                        <div onClick={()=>{setFontsClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Fonts</div>
                            <img  className={fonts===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div>                
                        <div className={fonts===true ? 'content show':'content'}>

                            <div>
                                <div onClick={()=>{setAllClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                    <div className='subsubtitle'>All</div>
                                    <img  className={all===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={all===true ? 'content show':'content'}>{renderAllTableContent(props.data,"all")}
                                </div>
                            </div>
                            
                            <div>
                                <div onClick={()=>{setWorksheetsClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                    <div className='subsubtitle'>WorkSheets</div>
                                    <img  className={worksheets===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={worksheets===true ? 'content show':'content'}>{renderAllTableContent(props.data,'worksheet')}
                                </div>   
                            </div>

                            <div>
                                <div onClick={()=>{setTooltips(prev=>!prev)}}className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Tooltips</div>
                                    <img  className={tooltips===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>         
                                <div className={tooltips===true ? 'content show':'content'}>{renderAllTableContent(props.data,'tooltip')}
                                </div>    
                            </div>  

                            <div>
                                <div onClick={()=>{setWorksheetTitles(prev=>!prev)}}className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Worksheet Titles</div>
                                    <img  className={worksheetTitles===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={worksheetTitles===true ? 'content show':'content'}>{renderAllTableContent(props.data,'title')}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setDashboardTitles(prev=>!prev)}} className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Dashboard Titles</div>
                                    <img  className={dashboardTitles===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>

                                <div className={dashboardTitles===true ? 'content show':'content'}>{renderAllTableContent(props.data,'dashTitle')}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setStoryTitle(prev=>!prev)}} className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Story Titles</div>
                                    <img  className={storyTitle===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div> 

                                <div className={storyTitle===true ? 'content show':'content'}>{renderAllTableContent(props.data,'storyTitle')}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div onClick={()=>{setLinesClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Lines</div>
                            <img  className={lines===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div>

                        <div className={lines===true ? 'content show':'content'}>

                            <div>
                                <div onClick={()=>{setGridlineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Grid Lines</div>
                                        <img  className={gridline===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={gridline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"gridline")}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setZerolineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Zero Lines</div>
                                        <img  className={zeroline===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={zeroline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"zeroline")}
                                </div>
                            </div>
                            <div>
                                <div onClick={()=>{setTrendlineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Trend Lines</div>
                                        <img  className={trendline===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={trendline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"trendline")}
                                </div>
                            </div>


                            <div>
                                <div onClick={()=>{setReflineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Ref Lines</div>
                                        <img  className={refline===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={refline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"refline")}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setDroplineClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Drop Lines</div>
                                        <img  className={dropline===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={dropline===true ? 'content show':'content'} >{renderAllTableContent(props.data,"dropline")}
                                </div>
                            </div>

                            <div>
                                <div onClick={()=>{setAxisClicked(prev=>!prev)}}
                                    className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Axis</div>
                                        <img  className={axis===false ? 'chevron':'chevron open'} src={Chevron} ></img>
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
