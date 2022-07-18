import productCat from "./products.json";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { createContext, useState } from "react";
import {root} from "./index";
import React from 'react';
import CardFocus from "./Card";

var passSelectedCard = createContext();

export default function Products () {
    var brands = ["OPPO","Apple","Samsung","Huawei","Ifei Home","Soft Cotton"];
    var category = ["laptops","smartphones","furniture","groceries","skincare","fragrances"];
    var allProducts = productCat["products"];
    var [displayCards, setDisplayCards] = useState(allProducts);

    var handleFilter = () => {

    };

    var selectCard = (e) => {
        root.render(
            <React.StrictMode>
                <passSelectedCard.Provider value={e}>
                    <CardFocus />
                </passSelectedCard.Provider>
            </React.StrictMode>
        );
    };

    return (
    <>
        {/* <Container> */}
            <Row>
                <Col md={{span:2, offset:1}}>
                    <h3>Filter</h3>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Brands</Accordion.Header>
                            <Accordion.Body>
                                {brands.map(brand => <Form.Check onChange={handleFilter} aria-label="radio 1" label={brand} />)}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Category</Accordion.Header>
                            <Accordion.Body>
                                {category.map(cat => <Form.Check onChange={handleFilter} aria-label="radio 1" label={cat} />)}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Title</Accordion.Header>
                            <Accordion.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Text onChange={handleFilter} id="basic-addon1">Title</InputGroup.Text>
                                <Form.Control
                                placeholder="Enter Title"
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>In stock</Accordion.Header>
                            <Accordion.Body>
                                <Form.Check onChange={handleFilter} aria-label="radio 1" label="Show Instock only" />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col md={{span:9}}>
                    <Row>
                        {displayCards.map((product,id) => {
                            var image = product["images"][0];
                            var title = product["title"];
                            var price = product["price"];
                            var category = product["category"];
                            var rating = product["rating"];
                            var index = id + 100;

                            var card = <Col xs={{offset:1,span:3}} key={index}>
                                <Card 
                                    style={{ width: '18rem', marginBottom: "20px", height:"380px", borderRadius:"1rem"}} 
                                    key={id}>
                                <Card.Img variant="top" src={image} style={{height:"18vh" , objectFit:"cover", borderTopLeftRadius:"1rem", borderTopRightRadius:"1rem"}}/>
                                <Card.Body style={{backgroundColor:"#f3f3f3", borderBottomRightRadius:"1rem", borderBottomLeftRadius:"1rem"}}>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>Price: ${price}</Card.Text>
                                <Card.Text>Category: {category}</Card.Text>
                                <Card.Text>Rating: {rating}</Card.Text>
                                <Card.Text 
                                    style={{color:"blue", textDecoration:"underline"}}
                                    onClick={()=>selectCard(product["id"])}>
                                    Learn more
                                </Card.Text>
                                </Card.Body>
                                </Card></Col>;
                                return card;
                            })
                        }
                    </Row>
                </Col>
            </Row>
            
        {/* </Container> */}
    </>
    );
};

export {passSelectedCard};