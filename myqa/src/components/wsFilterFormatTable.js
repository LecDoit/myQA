import React, { useState, useEffect, useMemo } from 'react'

import Chevron from '../chevron.svg'


export const WsFilterFormatTable = (props) =>{

    const [formatFiltersState,setFormatFiltersClicked] = useState(false)
    const [quickFilter,setQuickFilterClicked] = useState(false)
    const [quickFilterTitle,setQuickFilterTitleClicked] = useState(false)




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

        return(
            <div>   

                <div onClick={()=>{setFormatFiltersClicked(prev=>!prev)}} className='table'>
                    <div className='title'>Format Filters</div>
                    <img  className={formatFiltersState===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                </div>

                <div className={formatFiltersState===true ? 'content show':'content'}>

                    <div>

                        <div onClick={()=>{setQuickFilterTitleClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Title</div>
                            <img  className={quickFilterTitle===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div>   
                        
                        <div className={quickFilterTitle===true ? 'content show':'content'}>
                            <div >{renderFixedTableHeader('quick-filter-title')}</div>
                            <div >{renderTableContent(props.data,'quickFilterTitle')}</div>
                        </div>
                    </div>

                    <div>
                    <div onClick={()=>{setQuickFilterClicked(prev=>!prev)}} className='table--subtitle'>
                            <div className='subtitle'>Body</div>
                            <img  className={quickFilter===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                        </div>  

                        <div className={quickFilter===true ? 'content show':'content'}>

                            <div >{renderFixedTableHeader('quick-filter')}</div>
                            <div >{renderTableContent(props.data,'quickFilter')}</div>
                        </div>
                    </div>

                </div>


                
            </div>
            )
    }




