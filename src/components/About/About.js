import React from 'react';
import '../../style/main/main.css';
import exclusive from '../../images/exclusive.png'

function About() {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row about-1'>
                    <div className='col-lg-4'>
                        <img className='exc-img' src={exclusive} alt='' />
                    </div>
                    <div className='col-lg-6'>
                        <p>Exclisivley Available on RedStore</p>
                        <h2>Smart Band 4</h2>
                        <p className='p'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Consequuntur ipsa quos incidunt, sapiente quis nam velit sit
                            voluptates beatae recusandae!
                        </p>
                        <button className='btn'>Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;