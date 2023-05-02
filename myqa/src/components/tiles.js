import React from 'react'
import "./tile_css.css"

export function Tiles(props) {

    const db = props.db
    const ws = props.ws

  return (
    <div id='tile--containter'>
        <div className='tile'>
            <div className='tile--len'>{db.length}</div>
            <div className='tile--p'>Dashboards</div>
        </div>
        <div className='tile'>
            <div className='tile--len'>{ws.length}</div>
            <div className='tile--p'>Worksheets</div>
        </div>
        

    </div>
  )
}

