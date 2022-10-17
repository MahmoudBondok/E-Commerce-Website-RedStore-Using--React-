import React from 'react';
import '../../style/main/main.css';
import brand1 from '../../images/logo-coca-cola.png'
import brand2 from '../../images/logo-godrej.png'
import brand3 from '../../images/logo-oppo.png'
import brand4 from '../../images/logo-paypal.png'
import brand5 from '../../images/logo-philips.png'

function Brand() {
    return (
        <div className='brand'>
            <div className='container'>
                <div className='all-brand'>
                    <img src={brand1} alt='' />
                    <img src={brand3} alt='' />
                    <img src={brand2} alt='' />
                    <img src={brand4} alt='' />
                    <img src={brand5} alt='' />
                </div>
            </div>
        </div>
    )
}
export default Brand;