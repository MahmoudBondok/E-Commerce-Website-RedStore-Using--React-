import React from 'react';
import '../../style/main/main.css';
import AppStore from '../../images/app-store.png'
import PlayStore from '../../images/play-store.png'
import Logo from '../../images/logo-white.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row flex-54'>
                    <div className='col-lg-3'>
                        <h3>Download Our App</h3>
                        <p>Download App For Android and ios Mobile Phone</p>
                        <div className='apa'>
                            <img className='app' src={AppStore} alt='' />
                            <img className='app' src={PlayStore} alt='' />
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='apa'>
                            <img src={Logo} alt='' />
                        </div>
                        <p>Download App For Android and ios Mobile App For Android and ios Mobile Phone</p>
                    </div>
                    <div className='col-lg-3'>
                        <h3>Useful Links</h3>
                        <p>Coupons</p>
                        <p>Blog Post</p>
                        <p>Return Policy</p>
                        <p>Join Affiliate</p>
                    </div>
                    <div className='col-lg-3'>
                        <h3>Follow Us</h3>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Youtube</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;