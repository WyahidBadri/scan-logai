import React,{useState} from 'react';
import './recievingDetail.css'
import Scanner from './scanner'

export default function RecievingDetail(props){

    
    return(
        <div className="recieving-detail-main" onClick=  { () => props.setScan('clicked') }>
            <button className="top-button" >top</button>
            <button className="bottom-button">bottom</button>
        </div>
    )
}