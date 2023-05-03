
import React from 'react'
import {HeroIndex} from '../src/heroComponent/heroIndex'
import { Navbar } from './components/nav'
import { UploadNav } from './components/upload'
import "./style.css"


const App = () => {

  

  return (

    <div className="App">
      <Navbar></Navbar>
      <HeroIndex></HeroIndex>
      <UploadNav></UploadNav>

    </div>
  );
}

export default App;
