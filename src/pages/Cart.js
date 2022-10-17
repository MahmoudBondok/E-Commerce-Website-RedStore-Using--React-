import React from 'react'
import '../style/Page/page.css'
import buy from '../images/gallery-2.jpg'
import buy1 from '../images/buy-1.jpg'
import buy2 from '../images/buy-1.jpg'
import buy3 from '../images/buy-1.jpg'
import menu from '../images/menu.png'
import { Dropdown } from 'react-bootstrap'
import ProductsPage from './ProductsPage'
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <div className="product-details">
            <div className='container' style={{ marginBottom: '155px' }}>
                <div className='row vx-6'>
                    <div className='col-lg-5'>
                        <div className='buy'>
                            <img className='buy-img' src={buy} alt='' />
                        </div>
                        <span><img src={buy1} alt='' /></span>
                        <span><img src={buy2} alt='' /></span>
                        <span><img src={buy3} alt='' /></span>
                        <span><img src={buy3} alt='' /></span>
                    </div>
                    <div className='col-lg-5'>
                        <div className='details-10'>
                            <p>Home T-Shirt</p>
                            <h1>Red Printed T-Shirt By HRX</h1>
                            <p className='price'>
                                $50.00
                            </p>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Select Size
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">XXL</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">XL</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Midium</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Small</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                            <input
                                className="mx-2 num"
                                type="number"
                                style={{ width: "40px", height: "25px" }}
                            />
                            <Link to='/cart'>
                                <button className='btn'>Add To Cart</button>
                            </Link>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                            <h6>product details</h6>
                            <img className='icon' style={{ width: '26px' }} src={menu} alt='' />
                        </span>
                        <p className='desc'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Consequuntur ipsa quos incidunt, sapiente quis nam velit sit
                            voluptates beatae recusandae! ipsa quos incidunt, sapiente
                            quis nam velit sit voluptates beatae recusandae! ipsa quos
                        </p>
                    </div>
                </div>
            </div>
            <ProductsPage />
        </div>
    )
}
export default Cart;