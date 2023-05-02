import React, { useState} from 'react'
import {ReactComponent as Chevron} from '../chevron.svg'

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

                <div onClick={()=>{setWorksheetFormatStateClicked(prev=>!prev)}} className={worksheetFormatState===false ? 'table':'table expand'}>
                    <div className='title'>Worksheets Format</div>
                    <Chevron className={worksheetFormatState===false ? 'chevron':'chevron open'}  />
                </div>

                <div className={worksheetFormatState===true ? 'content show':'content'}>

                    <div>
                        <div onClick={()=>{setDefaultStateClicked(prev=>!prev)}} className={defaultState===false ? 'table--subtitle': 'table--subtitle expand' }>
                            <div className='subtitle'>Default</div>
                            <Chevron className={defaultState===false ? 'chevron':'chevron open'}  />
                        </div>   

                        <div className={defaultState===true ? 'content show':'content'}>
                            <div>
                                <div>
                                    <div onClick={()=>{setWorksheetStateClicked(prev=>!prev)}} className={worksheetState===false ? 'table--subtitle': 'table--subtitle expand' }>
                                        <div className='subsubtitle'>Worksheets</div>
                                        <Chevron className={worksheetState===false ? 'chevron':'chevron open'}  />
                                    </div>

                                    <div className={worksheetState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"worksheet")}</div>
                                    </div>
                                </div>

                                <div>
                                    <div onClick={()=>{setPaneStateClicked(prev=>!prev)}} className={paneState===false ? 'table--subtitle': 'table--subtitle expand' }>
                                        <div className='subsubtitle'>Pane</div>
                                        <Chevron className={paneState===false ? 'chevron':'chevron open'}  />
                                    </div>

                                    <div className={paneState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"defaultPane")}</div>
                                    </div>
                                </div>

                                <div>
                                    <div onClick={()=>{setHeaderStateClicked(prev=>!prev)}} className={headerState===false ? 'table--subtitle': 'table--subtitle expand' }>
                                        <div className='subsubtitle'>Header</div>
                                        <Chevron className={headerState===false ? 'chevron':'chevron open'}  />
                                    </div>

                                    <div className={headerState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"header")}</div>
                                    </div>
                                </div>

                                <div>
                                    
                                    <div onClick={()=>{setTooltipStateClicked(prev=>!prev)}} className={tooltipState===false ? 'table--subtitle': 'table--subtitle expand' }>
                                        <div className='subsubtitle'>Tooltips</div>
                                        <Chevron className={tooltipState===false ? 'chevron':'chevron open'}  />
                                    </div>

                                    <div className={tooltipState===true ? 'content show':'content'}>
                                        <div >{renderFixedTableHeader()}</div>
                                        <div >{renderTableContent(props.data,"tooltip")}</div>
                                    </div>
                                </div>

                                <div>
                                    
                                    <div onClick={()=>{setTitleStateClicked(prev=>!prev)}} className={titleState===false ? 'table--subtitle': 'table--subtitle expand' }>
                                        <div className='subsubtitle'>Title</div>
                                        <Chevron className={titleState===false ? 'chevron':'chevron open'}  />
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
                        <div onClick={()=>{setTotalStateClicked(prev=>!prev)}} className={totalState===false ? 'table--subtitle': 'table--subtitle expand' }>
                            <div className='subtitle'>Total</div>
                            <Chevron className={totalState===false ? 'chevron':'chevron open'}  />
                        </div> 

                        <div className={totalState===true ? 'content show':'content'} >

                            <div>

                                <div onClick={()=>{setTotalPaneClicked(prev=>!prev)}} className={totalPane===false ? 'table--subtitle': 'table--subtitle expand' }>
                                    <div className='subsubtitle'>Pane</div>
                                    <Chevron className={totalPane===false ? 'chevron':'chevron open'}  />
                                </div>
                                <div className={totalPane===true ? 'content show':'content'}>
                                    <div >{renderFixedTableHeader()}</div>
                                    <div >{renderTableContent(props.data,"totalPane")}</div>
                                </div>
                            </div>

                            <div>           
                                <div onClick={()=>{setTotalHeaderClicked(prev=>!prev)}} className={totalHeader===false ? 'table--subtitle': 'table--subtitle expand' }>
                                    <div className='subsubtitle'>Header</div>
                                    <Chevron className={totalHeader===false ? 'chevron':'chevron open'}  />
                                </div>

                                <div className={totalHeader===true ? 'content show':'content'}>
                                    <div >{renderFixedTableHeader()}</div>
                                    <div >{renderTableContent(props.data,"totalHeader")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div onClick={()=>{setGrandTotalState(prev=>!prev)}} className={grandTotalState===false ? 'table--subtitle': 'table--subtitle expand' }>
                            <div className='subtitle'>Grand Total</div>
                            <Chevron className={grandTotalState===false ? 'chevron':'chevron open'}  />
                        </div>
                        
                        <div className={grandTotalState===true ? 'content show':'content'}>
                            <div>
                                <div onClick={()=>{setGrandTotalPaneClicked(prev=>!prev)}} className={grandTotalPane===false ? 'table--subtitle': 'table--subtitle expand' }>
                                    <div className='subsubtitle'>Pane</div>
                                    <Chevron className={grandTotalPane===false ? 'chevron':'chevron open'}  />
                                </div>

                                <div className={grandTotalPane===true ? 'content show':'content'}>
                                    <div >{renderFixedTableHeader()}</div>
                                    <div >{renderTableContent(props.data,"grandTotalPane")}</div>
                                </div>
                            </div>

                            <div>                                
                                <div onClick={()=>{setGrandTotalHeaderClicked(prev=>!prev)}} className={grandTotalHeader===false ? 'table--subtitle': 'table--subtitle expand' }>
                                    <div className='subsubtitle'>Header</div>
                                    <Chevron className={grandTotalHeader===false ? 'chevron':'chevron open'}  />
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





