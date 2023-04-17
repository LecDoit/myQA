import React, { useState, useEffect,useRef } from 'react'
import {DbRCTable} from './dbRCTable'
import {WsRCTable} from './wsRCTable'
import {WbTable} from './wbTable'
import {DbSize} from './dbSize'
import {DbFormatTable} from './dbFormatTable'
import {WsFormatTable} from './wsFormatTable'
import {WsFilterFormatTable} from './wsFilterFormatTable'
var XMLParser = require('react-xml-parser')



export const UploadNav = () =>{
    const [file, setFile] = useState(null)
    const [fileName,setFileName] = useState(null)

    const [workbookStyleXML, setWorkbookStyleXML] = useState(null)
    const [dashboardsXML, setDashboardsXML] = useState(null)
    const [worksheetsXML, setWorksheetsXML] = useState(null)
    const [dashboards, setdashboards] = useState([])
    const [dashTitle, setDashTitle] = useState([])

    const ref = useRef(null)


    const handleScroll = () =>{
        ref.current?.scrollIntoView({behavior:'smooth'});
 

    }


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

            setInterval(handleScroll(),5000 )
 

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

    return(
        <div id=''>

            <div id='upload--containter'>

                <div id='upload--content'>Analyze Tableau Workbook</div>
                <input id='upload--button' className='button' type='file' onChange={handleFileChange}></input>
                </div>
            <div  ref={ref} id='upload--result'>
  
                <div  id='dashboard--title' >{fileName}</div>

                {/* WORKBOOK */}
                {/* workbookFormatFunc */}
                <WbTable  data={workbookStyleXML}></WbTable>

                {/* dashboardFormatFunc */}
                <DbFormatTable data={dashboardsXML}></DbFormatTable>

                {/* dashboardTitleRCFunc */}
                <DbRCTable data={dashboardsXML}></DbRCTable>

                {/* dashboardSizeFunc */}
                <DbSize  data={dashboardsXML}></DbSize>
                
                {/* WORKSHEETS */}
                {/* worksheetTitleRCFunc */}
                <WsRCTable data={worksheetsXML}></WsRCTable>

                {/* worksheetFormatFunc */}
                <WsFormatTable data={worksheetsXML}></WsFormatTable>

                {/* FILTERS */}
                {/* filterTitleRCFunc */}
                <WsFilterFormatTable data={worksheetsXML} ></WsFilterFormatTable>

            </div>
        </div>
    )
}
