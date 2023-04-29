import React, { useState, useEffect,useRef } from 'react'

export const FileName = (props) => {


    useEffect(()=>{
        if (props.data){
            props.valueCheck(true)
        }
    },[props.data])

  return (
    <div>
        <div id='dashboard--title'>{props.data}</div>
    </div>
  )
}

