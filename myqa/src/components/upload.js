import React, { useState, useEffect,useRef } from 'react'
import {DbRCTable} from './dbRCTable'
import {WsRCTable} from './wsRCTable'
import {WbTable} from './wbTable'
import {DbSize} from './dbSize'
import {DbFormatTable} from './dbFormatTable'
import {WsFormatTable} from './wsFormatTable'
import {WsFilterFormatTable} from './wsFilterFormatTable'
// import { RenderTable } from './RenderTable'
import {formatWorkbook} from '../functions/workbookFormatFunc'
import {formatDashboard} from '../functions/dashboardFormatFunc'
import { RenderTable } from './RenderTable'
import {formatDashboardRC} from '../functions/dashboardTitleRCFunc'
import {dashboardSize} from '../functions/dashboardSizeFunc'
import {formatWorksheetRC} from '../functions/worksheetTitleRCFunc'
import {formatWorksheet} from '../functions/worksheetFormatFunc'


var XMLParser = require('react-xml-parser')


export const UploadNav = () =>{
    const [file, setFile] = useState(null)
    const [fileName,setFileName] = useState(null)

    const [workbookStyleXML, setWorkbookStyleXML] = useState(null)
    const [dashboardsXML, setDashboardsXML] = useState(null)
    const [worksheetsXML, setWorksheetsXML] = useState(null)
    const [dashboards, setdashboards] = useState([])
    const [dashTitle, setDashTitle] = useState([])
    const [isStart,setIsStart] = useState(false)
    const [test,setTest] = useState(false)

    const [stateFormatDb,setstateFormatDb] = useState(null)

    const [formatWorkbookState,setformatWorkbookState] = useState(null)


    const [stateFormatWs,setstateFormatWs] = useState(null)




    const [stateRC,setstateRC] = useState(null)

    const [stateSize,setstateSize] = useState(null)

    const [wsRC,setWsRC] = useState(null)


    useEffect(()=>{
        if (worksheetsXML){
            setWsRC(formatWorksheetRC(worksheetsXML))
            setstateFormatWs(formatWorksheet(worksheetsXML))
  

        } 
    },[worksheetsXML])
   



    const ref = useRef(null)
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

        setFileName(file.name.substring(0,file.name.lastIndexOf('.')))
        reader.readAsText(file);
        reader.onload = () => {
        setFile(reader.result)  
 
        }

        reader.onerror = () =>{
            alert('wrong file ' + reader.error)
        }
    }


    useEffect(() => {
        if (file) {
            
        

        var xmlRAW = new XMLParser().parseFromString(file,'application/xml')




        let workbookXMLGet= (xmlRAW.getElementsByTagName('workbook')[0].children)
        let dashboardsXMLGet = xmlRAW.getElementsByTagName('dashboards')[0]

        setDashboardsXML(dashboardsXMLGet)

        let worksheetsXMLGet = xmlRAW.getElementsByTagName('worksheets')[0]
        setWorksheetsXML(worksheetsXMLGet)
        // handleScroll(ref)



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
            const cords = firstDiv.getBoundingClientRect().y -60
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
            <div ref={ref} id='upload--result'>
  
  
                {/* WORKBOOK */}
                {/* workbookFormatFunc */}
                
                { formatWorkbookState  && <WbTable data={formatWorkbookState}/> 
                }
                {/* {  <RenderTable />} */}
                {/* <WbTable  data={workbookStyleXML} valueCheck={valueCheck} fileName={fileName}></WbTable> */}

                {/* dashboardFormatFunc */}
                {stateFormatDb&&  <DbFormatTable data={stateFormatDb}></DbFormatTable>}

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
                {/* <WsFilterFormatTable data={worksheetsXML} ></WsFilterFormatTable> */}

            </div>
        </div>
    )
}
