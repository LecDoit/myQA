import React, { useState } from 'react'

export const RenderTable = (props) => {
    const {formatWorkbookState} = props

    const [clicked,setClicked] = useState(false)

  return (
    <div>RenderTable
            <div onClick={()=>{setClicked(prev=>!prev)}}>
            {clicked ? 'dziala':'niedziala'}
            <div className={clicked ? 'content show' :'content'}>aaaa</div>
        </div>
    </div>

  )
}

