import React from 'react';
import '../../style/main/main.css';
import user1 from '../../images/user-1.png'
import user2 from '../../images/user-2.png'
import user3 from '../../images/user-3.png'

function Client() {
    return (
        <div className='client'>
            <div className='container'>
                <div className='cards'>
                    <div className='card'>
                        <p>
                            Lorem amet ipsum dolor, sit amet consectetur
                            adipisicing amet elit.Consequuntur ipsa quos
                            beatae amet recusandae!
                        </p>
                        <span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </span>
                        <div className='client-1'>
                            <img src={user1} alt='' />
                            <h6>Sean Barker</h6>
                        </div>
                    </div>
                    <div className='card'>
                        <p>
                            Lorem amet ipsum dolor, sit amet consectetur
                            adipisicing amet elit.Consequuntur ipsa quos
                            beatae amet recusandae!
                        </p>
                        <span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </span>
                        <div className='client-1'>
                            <img src={user2} alt='' />
                            <h6>Sean Barker</h6>
                        </div>
                    </div>
                    <div className='card'>
                        <p>
                            Lorem amet ipsum dolor, sit amet consectetur
                            adipisicing amet elit.Consequuntur ipsa quos
                            beatae amet recusandae!
                        </p>
                        <span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </span>
                        <div className='client-1'>
                            <img src={user3} alt='' />
                            <h6>Sean Barker</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Client;