import React from 'react';
import '../../style/main/main.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <a href='/'>
                        <img className='logo' src={logo} alt='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                        <Nav.Link href="/cart">
                            <a href='/cart'>
                                <img className='cart' src={cart} alt='' />
                            </a>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;