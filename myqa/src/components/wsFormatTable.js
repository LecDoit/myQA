import React, { useState, useEffect, useMemo } from 'react'
import Chevron from '../chevron.svg'

export const WsFormatTable = (props) =>{

    const [worksheetFormatState,setWorksheetFormatStateClicked] = useState(false)
    const [defaultState,setDefaultStateClicked] = useState(false)
    const [totalState,setTotalStateClicked] = useState(false)
    const [grandTotalState,setGrandTotalState] = useState(false)
    
    const [worksheetState,setWorksheetStateClicked] = useState(false)
    const [paneState,setPaneStateClicked] = useState(false)
    const [headerState,setHeaderStateClicked] = useState(false)
    const [tooltipState,setTooltipStateClicked] = useState(false)
    const [titleState,setTitleStateClicked] = useState(false)

    const [totalPane,setTotalPaneClicked] = useState(false)
    const [totalHeader,setTotalHeaderClicked] = useState(false)

    const [grandTotalPane,setGrandTotalPaneClicked] = useState(false)
    const [grandTotalHeader,setGrandTotalHeaderClicked] = useState(false)




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

        return(
            <div>       

                <div onClick={()=>{setWorksheetFormatStateClicked(prev=>!prev)}} className='table'>
                    <div className='title'>Worksheets Format</div>
                    <img  className={worksheetFormatState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                </div>

                <div className={worksheetFormatState===true ? 'content show':'content'}>

                    <div>
                        <div onClick={()=>{setDefaultStateClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Default</div>
                            <img  className={defaultState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div>   

                        <div className={defaultState===true ? 'content show':'content'}>
                            <div>
                                <div>
                                    <div onClick={()=>{setWorksheetStateClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                        <div className='subsubtitle'>Worksheets</div>
                                        <img  className={worksheetState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                    </div>

                                    <div className={worksheetState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"worksheet")}</div>
                                    </div>
                                </div>

                                <div>
                                    <div onClick={()=>{setPaneStateClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                        <div className='subsubtitle'>Pane</div>
                                        <img  className={paneState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                    </div>

                                    <div className={paneState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"defaultPane")}</div>
                                    </div>
                                </div>

                                <div>
                                    <div onClick={()=>{setHeaderStateClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                        <div className='subsubtitle'>Header</div>
                                        <img  className={headerState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                    </div>

                                    <div className={headerState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"header")}</div>
                                    </div>
                                </div>

                                <div>
                                    
                                    <div onClick={()=>{setHeaderStateClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                        <div className='subsubtitle'>Tooltips</div>
                                        <img  className={headerState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                    </div>

                                    <div className={tooltipState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"tooltip")}</div>
                                    </div>
                                </div>

                                <div>
                                    
                                    <div onClick={()=>{setTitleStateClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                        <div className='subsubtitle'>Title</div>
                                        <img  className={titleState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                    </div>

                                    <div className={titleState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"title")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div onClick={()=>{setTotalStateClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Total</div>
                            <img  className={totalState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div> 

                        <div className={totalState===true ? 'content show':'content'} >

                            <div>

                                <div onClick={()=>{setTotalPaneClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Pane</div>
                                    <img  className={totalPane===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>
                                <div className={totalPane===true ? 'content show':'content'}>
                                    <div >{renderFixedTableHeader()}</div>
                                    <div >{renderTableContent(props.data,"totalPane")}</div>
                                </div>
                            </div>

                            <div>           
                                <div onClick={()=>{setTotalHeaderClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Header</div>
                                    <img  className={totalHeader===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>

                                <div className={totalHeader===true ? 'content show':'content'}>
                                    <div >{renderFixedTableHeader()}</div>
                                    <div >{renderTableContent(props.data,"totalHeader")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div onClick={()=>{setGrandTotalState(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Grand Total</div>
                            <img  className={grandTotalState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div>
                        
                        <div className={grandTotalState===true ? 'content show':'content'}>
                            <div>
                                <div onClick={()=>{setGrandTotalPaneClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Pane</div>
                                    <img  className={grandTotalPane===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>

                                <div className={grandTotalPane===true ? 'content show':'content'}>
                                    <div >{renderFixedTableHeader()}</div>
                                    <div >{renderTableContent(props.data,"grandTotalPane")}</div>
                                </div>
                            </div>

                            <div>                                
                                <div onClick={()=>{setGrandTotalHeaderClicked(prev=>!prev)}} className='table--sub--subtitle'>
                                    <div className='subsubtitle'>Header</div>
                                    <img  className={grandTotalHeader===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                                </div>

                                <div className={grandTotalHeader===true ? 'content show':'content'}>
                                    <div >{renderFixedTableHeader()}</div>
                                    <div >{renderTableContent(props.data,"grandTotalHeader")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            )
    }





