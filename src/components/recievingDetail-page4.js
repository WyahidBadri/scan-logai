import React from 'react';
import './recievingDetail-page4.css'

export default function RecievingDetail(props){
     let name = 'name'
     let number = 'number'
     let id = 'id'
     let type = 'type'
    
    return(
       <div className="page4-detail-main" onClick=  { () => props.setScan('clicked') }>
       <div className="page4-banner">
            <p>Recieve incoming Shipment Purchase Order #12345</p>
                <div className="recieve-notification-icon">
                    <p>1</p>
                </div>
            
       </div>
       <div className="progress-bar-page4">
                
            </div>
            <div className="top-page4">
                <div className="productType-page4">
                    <p>Product Type </p>
                    <div className="light-font-text">
                        <p>{type}</p>
                    </div>
                </div>
                <div className="productid-page4">
                    <p>Product ID </p>
                    <div className="light-font-text">
                         <p>{id}</p>
                    </div>
                    <div className="scan-image-picture-text">
                         <img className="cam2" src='https://cdn1.vectorstock.com/i/1000x1000/86/20/colorful-photo-camera-icon-cartoon-style-vector-15008620.jpg' />
                         <p className="text-under-pic">scan image</p>
                    </div>
                </div>
                <div className="productName-page4">
                    <p>Product Name </p>
                    <div className="light-font-text">
                         <p>{name}</p>
                    </div>
                </div>
                <div className="sku-page4">
                    <p>SKU # </p>
                    <div className="light-font-text">
                         <p>{number}</p>
                    </div>
                </div>
        </div>
        <div className="bottom-page4">
            <div className="productType-page4">
                    <p>Product Type</p>
                    <div className="light-font-text">
                         <p>{type}</p>
                    </div>
                </div>
                <div className="productid-page4">
                    <p>Product ID </p>
                    <div className="light-font-text">
                         <p>{id}</p>
                    </div>
                    <div className="scan-image-picture-text">
                         <img className="cam2" src='https://cdn1.vectorstock.com/i/1000x1000/86/20/colorful-photo-camera-icon-cartoon-style-vector-15008620.jpg' />
                         <p className="text-under-pic">scan image</p>
                    </div>
                </div>
                <div className="productName-page4">
                    <p>Product Name </p>
                    <div className="light-font-text">
                         <p>{name}</p>
                    </div>
                </div>
                <div className="sku-page4">
                    <p>SKU # </p>
                    <div className="light-font-text">
                         <p>{number}</p>
                    </div>
                </div>
        </div>
       </div>
    )
}