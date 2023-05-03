import React from 'react'
import videoBG from './video.mp4'

export const HeroIndex = () => {
  return (
    <div id='hero--containter' >
      <div className='overlay'></div>
      <video src={videoBG} autoPlay loop muted></video>

    </div>
  )
}

 