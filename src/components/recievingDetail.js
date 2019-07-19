import React,{useState} from 'react';
import './recievingDetail.css'
import Scanner from './scanner'

export default function RecievingDetail(props){

    
    return(
        <div className="recieving-detail-main" onClick=  { () => props.setScan('clicked') }>
            <button className="top-button" ><img className="cam" src='https://cdn1.vectorstock.com/i/1000x1000/86/20/colorful-photo-camera-icon-cartoon-style-vector-15008620.jpg' />
</button>
            <button className="bottom-button"><img className="cam" src='https://cdn1.vectorstock.com/i/1000x1000/86/20/colorful-photo-camera-icon-cartoon-style-vector-15008620.jpg' />
</button>
        </div>
    )
}