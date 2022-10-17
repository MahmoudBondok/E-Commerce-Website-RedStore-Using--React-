import React from 'react';
import '../../style/main/main.css';
import { Link } from 'react-router-dom';
import { category, cate } from '../../Data';

function Product() {
    return (
        <div className='product'>
            <div className='container'>
                <div className='category'>
                    {
                        cate.length ? (cate.map((item) => {
                            return (
                                <img src={item.img} alt='' />
                            )
                        })) : <h3>There Are No Categories</h3>
                    }
                </div>
                <div className='prod'>
                    <div className='desc-1'>
                        <h2>Feadured Products</h2>
                        <div className='par-2'></div>
                    </div>
                    <div className='boxs'>
                        {
                            category.length ? (category.slice(0, 4).map((item) => {
                                return (
                                    <Link to="/product-details">
                                        <div className='box'>
                                            <img src={item.img} alt='' />
                                            <div className='info-5'>
                                                <h6>{item.title}</h6>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })) : null
                        }
                    </div>
                </div>
                <div className='prod'>
                    <div className='desc-1'>
                        <h2>Latest Products</h2>
                        <div className='par-2'></div>
                    </div>
                    <div className='boxs'>
                        {
                            category.length ? (category.slice(4, 8).map((item) => {
                                return (
                                    <Link to="/product-details">
                                        <div className='box'>
                                            <img src={item.img} alt='' />
                                            <div className='info-5'>
                                                <h6>{item.title}</h6>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })) : null
                        }
                    </div>
                    <div className='boxs'>
                        {
                            category.length ? (category.slice(8, 12).map((item) => {
                                return (
                                    <Link to="/product-details">
                                        <div className='box'>
                                            <img src={item.img} alt='' />
                                            <div className='info-5'>
                                                <h6>{item.title}</h6>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;