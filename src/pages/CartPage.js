import React from 'react'
import IMGPRO1 from '../images/buy-1.jpg'
import IMGPRO2 from '../images/buy-2.jpg'
import IMGPRO3 from '../images/buy-3.jpg'

function CartPage() {
    return (
        <div className='cart-page' style={{ margin: '100px 0 215px' }}>
            <div className='container'>
                <div className="row head-cart">
                    <div className="col-lg-6">
                        Product
                    </div>
                    <div className="col-lg-3">
                        Quantity
                    </div>
                    <div className="col-lg-3" style={{ textAlign: 'end' }}>
                        Subtotal
                    </div>
                </div>
                <div className="row" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div className="col-lg-6 product-354">
                        <img src={IMGPRO1} alt='' />
                        <div className='text-info-165'>
                            <p>Red Printed T-Shirt</p>
                            <p style={{ fontSize: '14px', color: '#333' }}>Price: $50.00</p>
                            <p style={{ fontSize: '14px', color: 'red' }}>Remove</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <input
                            className="mx-2 num"
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                    <div className="col-lg-3" style={{ textAlign: 'end' }}>
                        $ 50.00
                    </div>
                </div>
                <div className="row" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div className="col-lg-6 product-354">
                        <img src={IMGPRO2} alt='' />
                        <div className='text-info-165'>
                            <p>HRX Sports Shoes</p>
                            <p style={{ fontSize: '14px', color: '#333' }}>Price: $75.00</p>
                            <p style={{ fontSize: '14px', color: 'red' }}>Remove</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <input
                            className="mx-2 num"
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                    <div className="col-lg-3" style={{ textAlign: 'end' }}>
                        $ 50.00
                    </div>
                </div>
                <div className="row" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div className="col-lg-6 product-354">
                        <img src={IMGPRO3} alt='' />
                        <div className='text-info-165'>
                            <p>HRX Gray TrackPants</p>
                            <p style={{ fontSize: '14px', color: '#333' }}>Price: $45.00</p>
                            <p style={{ fontSize: '14px', color: 'red' }}>Remove</p>
                        </div>
                    </div>
                    <div className="col-lg-3 os-51">
                        <input
                            className="mx-2 num"
                            type="number"
                            style={{ width: "40px", height: "25px" }}
                        />
                    </div>
                    <div className="col-lg-3" style={{ textAlign: 'end' }}>
                        $ 50.00
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartPage;