import React, { useState, useEffect} from 'react'
import JSZip from 'jszip'

import {DbRCTable} from './dbRCTable'
import {WsRCTable} from './wsRCTable'
import {WbTable} from './wbTable'
import {DbSize} from './dbSize'
import {DbFormatTable} from './dbFormatTable'
import {WsFormatTable} from './wsFormatTable'
import {WsFilterFormatTable} from './wsFilterFormatTable'
import { FileName} from './fileName'
import {formatWorkbook} from '../functions/workbookFormatFunc'
import {formatDashboard} from '../functions/dashboardFormatFunc'
import {formatDashboardRC} from '../functions/dashboardTitleRCFunc'
import {dashboardSize} from '../functions/dashboardSizeFunc'
import {formatWorksheetRC} from '../functions/worksheetTitleRCFunc'
import {formatWorksheet} from '../functions/worksheetFormatFunc'
import {worksheetFormatFilters} from '../functions/worksheetFilterFormat'
import {Tiles} from './tiles'




var XMLParser = require('react-xml-parser')


export const UploadNav = () =>{
    const [file, setFile] = useState(null)
    const [fileName,setFileName] = useState(null)
    const [workbookStyleXML, setWorkbookStyleXML] = useState(null)
    const [dashboardsXML, setDashboardsXML] = useState(null)
    const [worksheetsXML, setWorksheetsXML] = useState(null)
    const [isStart,setIsStart] = useState(false)
    const [stateFormatDb,setstateFormatDb] = useState(null)
    const [formatWorkbookState,setformatWorkbookState] = useState(null)
    const [stateFormatWs,setstateFormatWs] = useState(null)
    const [stateWsFilterFormat,setStateWsFilterFormat] = useState(null)
    const [stateRC,setstateRC] = useState(null)
    const [stateSize,setstateSize] = useState(null)
    const [wsRC,setWsRC] = useState(null)

   



    useEffect(()=>{
        if (worksheetsXML){
            setWsRC(formatWorksheetRC(worksheetsXML))
            setstateFormatWs(formatWorksheet(worksheetsXML))
            setStateWsFilterFormat(worksheetFormatFilters(worksheetsXML))
        } 
    },[worksheetsXML])
   

    const valueCheck = (arg)=>{
        setIsStart(arg)
    }

    useEffect(()=>{
        if (dashboardsXML){
            setstateFormatDb(formatDashboard(dashboardsXML))
            setstateRC(formatDashboardRC(dashboardsXML))
            setstateSize(dashboardSize(dashboardsXML))
            
        } 
    },[dashboardsXML])


    useEffect(()=>{
        if (workbookStyleXML){
            setformatWorkbookState(formatWorkbook(workbookStyleXML))
        }
    },[workbookStyleXML])

    const handleFileChange = e =>{

        const file = e.target.files[0]
        const reader = new FileReader();

        const fileFormat = (file.name.substring(file.name.lastIndexOf('.'),file.name.length))

        if (fileFormat==='.twb'){

            setFileName(file.name.substring(0,file.name.lastIndexOf('.')))

            reader.readAsText(file);
            reader.onload = () => {
             setFile(reader.result)  
     
            }
        } else if(fileFormat==='.twbx'){
            const zip = new JSZip();
            zip.loadAsync(file)
                .then((content)=>{
                    const files = content.files
                    const filesKeys = Object.keys(files)


                    for (let a = 0 ; a<filesKeys.length ; a++){
                        const filesKeysFormat = filesKeys[a].substring(file.name.lastIndexOf('.'),file.name.length)
                        if (filesKeysFormat==='.twb'){
                            files[filesKeys[a]].async('string').then((contentTxt)=>{
                                setFileName(filesKeys[a].substring(0,filesKeys[a].lastIndexOf('.')))
                                setFile(contentTxt) 

                            })                      
             
                        }
                    }
                    
              
                })
        
        
        }
         else {
            alert('Wrong file format.\nPlease choose .twb or .twbx extension.')
        }


        reader.onerror = () =>{
            alert('wrong file ' + reader.error)
        }
    }


    useEffect(() => {
        if (file) {
            console.log('works')

        var xmlRAW = new XMLParser().parseFromString(file,'application/xml')

        let workbookXMLGet= (xmlRAW.getElementsByTagName('workbook')[0].children)
        let dashboardsXMLGet = xmlRAW.getElementsByTagName('dashboards')[0]

        setDashboardsXML(dashboardsXMLGet)

        let worksheetsXMLGet = xmlRAW.getElementsByTagName('worksheets')[0]
        setWorksheetsXML(worksheetsXMLGet)

        for (let a = 0;a<workbookXMLGet.length;a++){

            if ((workbookXMLGet[a].name)==='style'){
            setWorkbookStyleXML(workbookXMLGet[a])
            return
            } else{
            setWorkbookStyleXML('empty')
            }

        }

        }

    }, [file])

    useEffect(()=>{
        if (isStart){
            const firstDiv = document.getElementById('dashboard--title')
            const mainDiv = document.getElementById('upload--result')

            const bottomSizeDiv = document.createElement('div')
            bottomSizeDiv.classList.add('test')
            mainDiv.appendChild(bottomSizeDiv)

            const cords = firstDiv.getBoundingClientRect().y -60
            const valueToGrow = window.innerHeight+cords
            bottomSizeDiv.style.height=valueToGrow+'px'
            window.scrollTo({
                top:cords,
                behavior:'smooth'
            })    

    
        }


    },[isStart])

    return(
        <div id='upload--main--containter'>

            <div id='upload--containter'>

                <div id='upload--content'>Analyze Tableau Workbook</div>
                <input id='upload--button' className='button' type='file' onChange={handleFileChange}></input>
                </div>
            <div  id='upload--result'>
  
                {formatWorkbookState && <FileName  data={fileName} valueCheck={valueCheck}/>}


                {formatWorkbookState && <Tiles db={stateRC} ws={wsRC}/> }
                {/* dashboardFormatFunc */}
                {stateFormatDb &&  <DbFormatTable data={stateFormatDb}></DbFormatTable>}

                {/* dashboardTitleRCFunc */}
                { stateRC && <DbRCTable data={stateRC}></DbRCTable>}

                {/* dashboardSizeFunc */}
                { stateSize &&  <DbSize  data={stateSize}></DbSize>}

                {/* WORKSHEETS */}
                {/* worksheetTitleRCFunc */}
                { wsRC && <WsRCTable data={wsRC}></WsRCTable>}

                {/* worksheetFormatFunc */}
                { stateFormatWs && <WsFormatTable data={stateFormatWs}></WsFormatTable>}

                {/* FILTERS */}
                {/* filterTitleRCFunc */}
                {stateWsFilterFormat && <WsFilterFormatTable data={stateWsFilterFormat} ></WsFilterFormatTable>}

                {/* WORKBOOK */}
                {/* workbookFormatFunc */}
                
                { formatWorkbookState  && <WbTable data={formatWorkbookState}/>}


            </div>
        </div>
    )
}
