import React, { useState, useEffect, useMemo } from 'react'

// import {formatWorkbook} from '../functions/workbookFormatFunc'


export const WbTable = (props) =>{

    // const [formatWorkbookState,setformatWorkbookState] = useState(null)
    const [formatWorkbook,setFormatWorkbookClicked] = useState(false)
    const [fonts,setFontsClicked] = useState(false)
    const [lines,setLinesClicked] = useState(false)
    const [all,setAllClicked] = useState(false)


    const toggle = (stat,setstat) =>{

        if (stat===false){
            return setstat(true)
        }
        setstat(false)
    }


    // useEffect(()=>{
    //     if (props.data){
    //         props.valueCheck(true)
    //         // setformatWorkbookState(formatWorkbook(props.data))
    //     }
    // },[props.data])
    


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

    // let RenderTable = () =>{
        return(
            <div>
                {/* 1 */}
                <div onClick={()=>{setFormatWorkbookClicked(prev=>!prev)}}
                    id='formatWorkbook' 
                    className='table'>
                    Format Workbook
                    
                    <div>{formatWorkbook===false ? "+":"-"}</div>

                </div>
                {/* 1-1 */}
                <div className={formatWorkbook===true ? 'content show':'content'}> 
                     
                     {/* 2 */}
                    <div  onClick={()=>{setFontsClicked(prev=>!prev)}}
                        className='table--subtitle'>
                        Fonts

                        <div>{fonts===false ? "+":"-"}</div>

                    </div>
                    
                    {/* 2-1 */}
                    <div className={fonts===true ? 'content show':'content'}>

                        <div onClick={()=>{setAllClicked(prev=>!prev)}}
                            className='table--sub--subtitle'>
                            All
                            <div>{all===false ? "+":"-"}</div>

                        </div>

                        <div className={all===true ? 'content show':'content'} >{renderAllTableContent(props.data,"all")}


                        {/* <div onClick={()=>{setWorksheetsClicked(prev=>!prev)}}
                        className='table--sub--subtitle'>
                            WorkSheets
                            <div>{worksheets===false ? "+":"-"}</div>

                         </div>
                         <div className={worksheets===true ? 'content show':'content'} >{renderAllTableContent(props.data,'worksheet')}</div> */}


                        </div>
                    </div>


                    {/* 3 */}
        
                    <div  onClick={()=>{setLinesClicked(prev=>!prev)}}
                        className='table--subtitle'>
                        Lines

                        <div>{lines===false ? "+":"-"}</div>

                    </div>
                    {/* 3-1 */}
                    <div className={lines===true ? 'content show':'content'}> 
                </div>

                </div>

                


    
                {/* <div className='table--sub--subtitle'>Tooltips
                    <div>{renderAllTableContent(formatWorkbookState,'tooltip')}</div>
                </div> */}

                {/* <div className='table--sub--subtitle'>Worksheet Titles
                    <div>{renderAllTableContent(formatWorkbookState,'title')}</div>
                </div> */}
                
    
                {/* <div className='table--sub--subtitle'>Dashboard Titles
                    <div>{renderAllTableContent(formatWorkbookState,'dashTitle')}</div>
                </div> */}
                
{/*     
                <div className='table--sub--subtitle'>Story Titles
                    <div>{renderAllTableContent(formatWorkbookState,'storyTitle')}</div>
                </div>  */}
                
        
                    {/* <div className='table--subtitle' id='lines'>Lines
                        <div className='table--sub--subtitle'>Grid Lines
                            <div>{renderAllTableContent(formatWorkbookState,'gridline')}</div>
            
                        </div>

                        <div className='table--sub--subtitle'>Zero Lines
                            <div>{renderAllTableContent(formatWorkbookState,'zeroline')}</div>
                        </div>

            
                        <div className='table--sub--subtitle'>Trend Lines
                            <div>{renderAllTableContent(formatWorkbookState,'trendline')}</div>
                        </div>

            
                        <div className='table--sub--subtitle'>Reference Lines
                            <div>{renderAllTableContent(formatWorkbookState,'refline')}</div>
                        </div>

            
                        <div className='table--sub--subtitle'>Drop Lines
                            <div>{renderAllTableContent(formatWorkbookState,'dropline')}</div>
                        </div>

            
                        <div className='table--sub--subtitle'>Axis Rulers
                            <div>{renderAllTableContent(formatWorkbookState,'axis')}</div>
                        </div>

                    </div> */}

            </div>
        )
    }
    // if (formatWorkbookState){
        // return (
        // <div id='formatWorkbookTable'>
        //     {/* <div  id='dashboard--title' >{props.fileName}</div> */}
        //     <RenderTable />
        // </div>
        // )
    // } else {
    //     return <div></div>
    // }
            
        


// }