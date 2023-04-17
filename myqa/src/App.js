import XMLDATA from './twbx/COA.twb'
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import {HeroIndex} from '../src/heroComponent/heroIndex'
// import {formatDashboard} from './functions/dashboardFormatFunc'
// import {formatWorkbook} from './functions/workbookFormatFunc'
// import {formatDashboardRC} from './functions/dashboardTitleRCFunc'
// import {formatWorksheetRC} from './functions/worksheetTitleRCFunc'
// import {formatWorksheet} from './functions/worksheetFormatFunc'
// import {dashboardSize} from './functions/dashboardSizeFunc'
// import {wsFilterListFunc} from './functions/filterListFunc'
// import {filterTitleRC} from './functions/filterTitleRCFunc'
// import {worksheetFormatFilters} from './functions/worksheetFilterFormat'



import { Navbar } from './components/nav'
import { UploadNav } from './components/upload'
import { AnimationNav } from './components/animation'

import "./style.css"


const App = () => {
  // var XMLParser = require('react-xml-parser')

  

  return (

    <div className="App">
      <Navbar></Navbar>
      <HeroIndex></HeroIndex>
      <UploadNav></UploadNav>

    </div>
  );
}

export default App;
