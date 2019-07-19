import React,{useState} from 'react';
import RecievingDetail from './recievingDetail'
import Scanner from './scanner'
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