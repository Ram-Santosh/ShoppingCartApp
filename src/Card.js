import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./logo.svg";
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incCartCount } from './reducers';
import cartImg from "./cart.jpg"
import Nav from 'react-bootstrap/Nav';


export default function CardFocus () {
    var allProducts = useSelector((state) => state.allProducts);
    var selectedCard = useSelector((state) => state.selectedCard);
    var cart = useSelector((state) => state.cart);
    var cartCount = useSelector((state)=> state.cartCount);
    var navigate = useNavigate();
    var dispatch = useDispatch();

    var product = allProducts.filter((product) => {
        if (product.id === selectedCard){
            return product;
        }
    })[0];

    var handleNav = () => {
        navigate("/Products");
    }

    var handleCart = (item) => {
        var copyCart = Object.assign({}, cart);
        if (item in copyCart) {
            copyCart[item] = copyCart[item] + 1; 
        }
        else {
            copyCart[item] = 1;
        }
        dispatch(incCartCount());
        dispatch(addToCart(copyCart));
    }

    var goToCart = () => {
        navigate("/Cart");
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Container>
                <Navbar.Brand onClick={handleNav}>
                    <img
                    alt=""
                    src={logo}
                    width="65"
                    height="30"
                    className="d-inline-block align-top"
                    />
                    Home
                </Navbar.Brand>
                <Nav className="text-end">
                    <Nav href="/"><img src={cartImg} style={{width:"40px", height:"40px"}} onClick={goToCart} alt="cart"></img></Nav>
                    <Nav className="fw-bolder" style={{color:"white"}}>{cartCount}</Nav>
                </Nav>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col md={{span:5}}>
                        <Carousel style={{height:"290px", width: '500px'}}>
                            {product["images"].map((image, id) => {
                                var item = 
                                <Carousel.Item interval={1500} key={id}>
                                    <img
                                    className="d-block"
                                    src={image}
                                    style={{height:"290px", width: '500px', objectFit:"contain"}}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                return item;
                                })
                            }  
                        </Carousel>
                    </Col>
                    <Col md={{span:5, offset:2}}>
                        <h2>{product.title}</h2>
                        <p>Rating:  ⭐{product.rating}</p>
                        <hr/>
                        <p>M.R.P: <s>${product.price}</s></p>
                        <p>On Sale: ${Math.round(product.price - product.discountPercentage*product.price*0.01)}</p>
                        <p>Stock: {product.stock}</p>
                        <Button variant="warning" onClick={() => handleCart(product.id)}>Add to Cart</Button>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <hr />
                    <h4>Product Description</h4>
                    <p>Description: <i>{product.description}</i></p>
                    <p>Brand: <i>{product.brand}</i></p>
                    <p>Category: <i>{product.category}</i></p>
                </Row>
            </Container>
            
        </>
    );
}