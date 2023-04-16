import React from 'react'
import videoBG from './video.mp4'

export const HeroIndex = () => {
  return (
    <div id='hero--containter' >
      <video src={videoBG} autoPlay loop muted></video>
      <div id='hero--content'>
        Analyze Tableau Workbook
      </div>
    </div>
  )
}

 