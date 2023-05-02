import React, { useState} from 'react'
import {ReactComponent as Chevron} from '../chevron.svg'



export const DbSize = (props) =>{

    const [stateSize,setstateSizeClicked] = useState(false)



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
                    <div>{value.dashboard}</div>
                    <div>{value.maxheight}</div>
                    <div>{value.maxwidth}</div>
                    <div>{value.minheight}</div>
                    <div>{value.minwidth}</div>

                </div>
            )
        })
        }
    }

    return(
       
        <div >
            
            <div onClick={()=>{setstateSizeClicked(prev=>!prev)}} className={stateSize===false ? 'table':'table expand'} >
                <div className='title'>Dashboards Size</div>
                <Chevron className={stateSize===false ? 'chevron':'chevron open'}  />
            </div>

            <div className={stateSize===true ? 'content show':'content'}>
                <div className='table--header'>{renderTableHeader(props.data)}</div>
                <div>{renderTableContent(props.data)}</div>
            </div>

        </div>
    )

}