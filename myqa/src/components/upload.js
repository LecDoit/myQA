import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import {DbRCTable} from './dbRCTable'
import {WsRCTable} from './wsRCTable'
import {WbTable} from './wbTable'
import { DbSize } from './dbSize'
var XMLParser = require('react-xml-parser')



export const UploadNav = () =>{
    const [file, setFile] = useState(null)

    const [xml, setXML] = useState(null)
    const [xmlDOM, setXMLDOM] = useState(null)
    const [workbookStyleXML, setWorkbookStyleXML] = useState(null)
    const [dashboardsXML, setDashboardsXML] = useState(null)
    const [worksheetsXML, setWorksheetsXML] = useState(null)
    const [dashboards, setdashboards] = useState([])
    const [dashTitle, setDashTitle] = useState([])




    const handleFileChange = e =>{
        const file = e.target.files[0]
        const reader = new FileReader();
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

            let xmlDOM = new DOMParser().parseFromString(file, "text/xml");
            setXMLDOM(xmlDOM)
    

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

    return(
        <div>
            <div>File Reader</div>
            <input type='file' onChange={handleFileChange}></input>
            <DbRCTable data={dashboardsXML}></DbRCTable>
            <WsRCTable data={worksheetsXML}></WsRCTable>
            <WbTable data={workbookStyleXML}></WbTable>
            <DbSize data={dashboardsXML}></DbSize>
        </div>
    )
}
