import React,{useState} from 'react';
import './recievingDetail.css'
import Scanner from './scanner'

export default function RecievingDetail(props){
     let name = 'name'
     let number = 'number'
     let id = 'id'
     let type = 'type'
    
    return(
       <div className="recieving-detail-main" onClick=  { () => props.setScan('clicked') }>

       <div className="recieve-banner">
            <p>Recieve incoming Shipment Purchase Order #12345</p>
                <div className="recieve-notification-icon">
                    <p>1</p>
                </div>
       </div>
            <div className="top-recieve">
                <div className="productType">
                    <p>Product Type</p>
                    <p>{type}</p>
                </div>
                <div className="productid-recieve">
                    <p>Product ID</p>
                    <p>{id}</p>
                </div>
                <div className="productName-recieve">
                    <p>Product Name</p>
                    <p>{name}</p>
                </div>
                <div className="sku-recieve">
                    <p>SKU # </p>
                    <p>{number}</p>
                </div>

        </div>
        <div className="bottom-recieve">
            <div className="productType">
                        <p>Product Type</p>
                        <p>Type</p>
                    </div>
                    <div className="productid-recieve">
                        <p>Product ID</p>
                        <p>ID</p>
                    </div>
                    <div className="productName-recieve">
                        <p>Product Name</p>
                        <p>Name</p>
                    </div>
                    <div className="sku-recieve">
                        <p>SKU #</p>
                        <p>#</p>
                    </div>
        </div>

       </div>
       

    )
}