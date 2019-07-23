import React from 'react';
import './recievingDetail.css'

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
                <div className="productType-recieve">
                    <p>Product Type {type}</p>
                </div>
                <div className="productid-recieve">
                    <p>Product ID {id}</p>
                    <img className="cam2" src='https://cdn1.vectorstock.com/i/1000x1000/86/20/colorful-photo-camera-icon-cartoon-style-vector-15008620.jpg' />
                </div>
                <div className="productName-recieve">
                    <p>Product Name {name}</p>
                </div>
                <div className="sku-recieve">
                    <p>SKU # {number}</p>
                </div>
        </div>
        <div className="bottom-recieve">
            <div className="productType-recieve">
                    <p>Product Type {type}</p>
                </div>
                <div className="productid-recieve">
                    <p>Product ID {id}</p>
                    <img className="cam2" src='https://cdn1.vectorstock.com/i/1000x1000/86/20/colorful-photo-camera-icon-cartoon-style-vector-15008620.jpg' />
                </div>
                <div className="productName-recieve">
                    <p>Product Name {name}</p>
                </div>
                <div className="sku-recieve">
                    <p>SKU # {number}</p>
                </div>
        </div>
       </div>
    )
}