import React from 'react'
import '../../style/Page/page.css';
import header from '../../images/image1.png'

function Account() {
    return (
        <div className="account">
            <div className='container'>
                <div className='row page-account'>
                    <div className='col-lg-6'>
                        <div className='text'>
                            <img src={header} alt='' />
                        </div>
                    </div>
                    <form action='mahmoudsafwat799@gmail.com' method='POST' className='form col-lg-6'>
                        <h6>Login</h6>
                        <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
                        <input type="password" className="form-control" id="floatingInput" placeholder="Password" />
                        <button type='submit' className='btn'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Account;