import React, { useState, useEffect, useMemo } from 'react'
import Chevron from '../chevron.svg'

export const DbRCTable = (props) =>{

    const [dbRc,setDbRc] = useState(false)




    let renderTableHeader = (arg)=>{
        if (arg){
            let arg2 = arg[0]
            return Object.keys(arg2).map((obj,i)=>{
                
                return (
                    <div key={obj}>
                        {obj}
                    </div>
                )
            })
        }
    }

    let renderTableContent= (arg)=>{
        if (arg){
        return Object.entries(arg).map(([key,value],i)=>{
            return (
         
                <div className='table--content' key={key}>
                    <div>{value.dbname}</div>
                    <div>{value.bold}</div>
                    <div>{value.fontalignment}</div>
                    <div>{value.fontcolor}</div>
                    <div>{value.fontname}</div>
                    <div>{value.fontsize}</div>
                    <div>{value.italic}</div>
                    <div>{value.underline}</div>
                    <div>{value.value}</div>
                </div>
            )
        })
        }
    }

    return(
       
        <div>

                <div onClick={()=>{setDbRc(prev=>!prev)}} className='table'>
                    <div className='title'>Double Click Dashboard Title</div>
                    <img  className={dbRc===false ? 'chevron':'chevron open'} src={Chevron} ></img>
                </div>

            <div className={dbRc===true ? 'content show':'content'}>
                <div className='table--header'>{renderTableHeader(props.data)}
                </div>
                <div>{renderTableContent(props.data)}
                </div>
            </div>

        </div>
    )

}