import { useContext } from "react";
import { passSelectedCard } from "./Products";
import productCat from "./products.json";
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./logo.svg";
import Products from "./Products";
import {root} from "./index";
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var allProducts = productCat["products"];

export default function CardFocus () {
    var selectedCard = useContext(passSelectedCard);

    var product = allProducts.filter((product) => {
        if (product.id === selectedCard){
            return product;
        }
    })[0];

    var handleNav = () => {
        root.render(
            <React.StrictMode>
                <Products />
            </React.StrictMode>
        );
    }

    console.log(product)
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
                        <p>On Sale: ${product.price - product.discountPercentage*product.price*0.01}</p>
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