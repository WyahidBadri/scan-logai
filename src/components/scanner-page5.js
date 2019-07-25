import React from 'react';
import './scanner-page5.css';

export default function Scanner(){

    return(
    <div className="page5-main">
        <div className="banner-page5">
            <p>Recieve incoming Shipment Purchase Order #12345</p>
            <div className="recieve-notification-icon">
                <p>1</p>
            </div>
        </div>
        <div className="page5-rect">
            <div className="page5-inner-rect">
            <img className="cam" src='https://cdn1.vectorstock.com/i/1000x1000/86/20/colorful-photo-camera-icon-cartoon-style-vector-15008620.jpg' />
            <p className="scan-text">Center product barcode here</p>
            </div>
        </div>
        <div className="oval-page5">
        </div>
        <div className="product-info-page5">
            <div className="productType-page5">
                <p>Product Type</p>
                <div className="lighter-font">
                     <p>Type</p>
                </div>
            </div>
            <div className="productid-page5">
                <p>Product ID</p>
                <div className="lighter-font">
                     <p>id</p>
                </div>
            </div>
            <div className="productName-page5">
                <p>Product Name</p>
                <div className="lighter-font">
                     <p>name</p>
                </div>
            </div>
            <div className="sku-page5">
                <p>SKU #</p>
                <div className="lighter-font">
                     <p>number</p>
                </div>
            </div>
        </div>
        <div className="submit-product-detail">
            <h2>Confirm product recieved</h2>
        </div>
    </div>
    )
}