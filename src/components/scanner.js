import React from 'react';
import './scanner.css';

export default function Scanner(){
    
    return(
    <div className="scanner-main">
        <div className="scanner-rect">
            <div className="scanner-inner-rect">
            <p className="scan-text">Center product barcode here</p>
            <img className="cam" src='https://cdn1.vectorstock.com/i/1000x1000/86/20/colorful-photo-camera-icon-cartoon-style-vector-15008620.jpg' />
            </div>
        </div>
        <div className="oval">

        </div>
        <div className="product-type-rect">
            <div className="productType">
                <p>Product Type</p>
                <p>Type</p>
            </div>
            <div className="productid">
                <p>Product ID</p>
                <p>ID</p>
            </div>
            <div className="productName">
                <p>Product Name</p>
                <p>Name</p>
            </div>
            <div className="sku">
                <p>SKU #</p>
                <p>#</p>
            </div>
            <div className="quantity">
                <p>Quantity</p>
                <p>quantity</p>
            </div>
        </div>
        <div className="submit-product-detail">
            <h2>Submit Product Detail</h2>
        </div>
    </div>
    )
}