import React,{useState} from 'react';
import RecievingDetail from './recievingDetail-page4'
import Scanner from './scanner-page5'
import './render-scan.css';

export default function RenderScan(){

    const[scan, setScan] = useState('')

    return(
        <div className="render-scan-main">
            {
                scan ===""&&
                <RecievingDetail setScan={setScan}/>
            
            }
            {
                scan ==='clicked'&&
                <Scanner />
            }
        </div>
    )
}