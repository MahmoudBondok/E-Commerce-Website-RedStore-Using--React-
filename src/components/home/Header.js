import React from 'react';
import '../../style/main/main.css';
import header from '../../images/image1.png'

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='landing'>
                    <div className='text'>
                        <h1 className='head'>
                            Give Your Workout<br /> A New Style!
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Consequuntur ipsa quos incidunt, sapiente quis nam velit sit
                            voluptates beatae recusandae!
                        </p>
                        <button className='btn'>Explore Now</button>
                    </div>
                    <div className='text'>
                        <img src={header} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;