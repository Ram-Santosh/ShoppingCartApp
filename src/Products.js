import productCat from "./products.json";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { createContext, useEffect, useState } from "react";
import {root} from "./index";
import React from 'react';
import CardFocus from "./Card";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./logo.svg";

var passSelectedCard = createContext();


export default function Products () {
    var brands = ["OPPO","Apple","Samsung","Huawei","Ifei Home","Soft Cotton"];
    var category = ["laptops","smartphones","furniture","groceries","skincare","fragrances"];
    var allProducts = productCat["products"];
    var [displayCards, setDisplayCards] = useState(allProducts);
    var [filter, setFilter] = useState({
        brand: [],
        category: [],
        title: false,
        stock: false,
        brandFlag: false,
        categoryFlag: false,
        titleFlag: false
    })

    useEffect(() => {
         //Filter logic
         var fil = allProducts;

         if (filter.brandFlag){
            fil = allProducts.filter((product) => {
                if (filter.brand.includes(product.brand)) return product;
            })
         }

         if (filter.categoryFlag){
            fil = fil.filter((product) => {
                if (filter.category.includes(product.category)) return product;
            })
        }

         if (filter.titleFlag){
            fil = fil.filter((product) => {
                if (filter.title !== false && filter.title.length > 0){
                    if (product.title.toLowerCase().startsWith(filter.title.toLowerCase())) return product;
                }
            })
         }

         if (filter.stock){
            fil = fil.filter((product) => {
                if (product.stock > 0) return product;
            })
         }
         setDisplayCards(fil);

        //All filters turned off
        if (filter.stock === false && filter.title === false && filter.brand.length === 0 && filter.category.length === 0){
            setDisplayCards(allProducts);
        }
    },[filter,allProducts])

    var handleFilter = (e) => {

        // Stock
        if (e.target.name === "instock"){
            if (e.target.checked){
                setFilter({...filter, stock:true})
            }
            else setFilter({...filter, stock:false});
        }

        //Title
        if (e.target.name === "title"){
            if (e.target.value.length > 0)setFilter({...filter, title: e.target.value, titleFlag: true});
            else setFilter({...filter, title: false, titleFlag: false});
        }

        //Brand
        if (e.target.className === "brand"){
            var brand = filter.brand;
            if (e.target.checked){
                brand.push(e.target.name);
                setFilter({...filter, brand: brand, brandFlag: true});
            }
            else {
                brand = brand.filter((b) => {
                    if (b !== e.target.name)return b;
                });
                if (brand.length === 0){
                    setFilter({...filter, brandFlag: false, brand: []}) 
                } 
                else {
                    setFilter({...filter, brand: brand});
                }
            }
        }

        //Category
        if (e.target.className === "category"){
            var cat = filter.category;
            if (e.target.checked){
                cat.push(e.target.name);
                setFilter({...filter, category: cat, categoryFlag: true});
            }
            else {
                cat = cat.filter((c) => {
                    if (c !== e.target.name)return c;
                });
                if (cat.length === 0) {
                    setFilter({...filter, categoryFlag: false, category: []});
                }
                else {
                    setFilter({...filter, category: cat});
                }
            }
        }
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

    var handleNav = () => {
        root.render(
            <React.StrictMode>
                <Products />
            </React.StrictMode>
        );
    }

    var handleSort = (e) => {
        var copyDisplay = [...displayCards];

        copyDisplay.sort(function (a,b){
            return a[e.target.value] - b[e.target.value];
        });

        setDisplayCards(copyDisplay);
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
                </Container>
            </Navbar>

            <Row>
                <Col md={{span:2, offset:1}}>
                    <h3>Filter</h3>
                    <Accordion defaultActiveKey="0" className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Brands</Accordion.Header>
                            <Accordion.Body>
                                {brands.map(brand => {
                                    return <>
                                        <input type="checkbox" onChange={handleFilter} className="brand" name={brand} aria-label="radio 1" />
                                        <label> &nbsp;{brand}</label><br />
                                    </>
                                    }
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Category</Accordion.Header>
                            <Accordion.Body>
                                {category.map((cat) => {
                                    return <>
                                        <input type="checkbox" onChange={handleFilter} className="category" name={cat} aria-label="radio 1" />
                                        <label> &nbsp;{cat}</label><br/>
                                    </>
                                })
                            }
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Title</Accordion.Header>
                            <Accordion.Body>
                            <InputGroup className="mb-3" onChange={handleFilter} >
                                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                <Form.Control
                                name="title"
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
                                <Form.Check onChange={handleFilter} aria-label="radio 1" name="instock" label="Show Instock only" />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h4>Sort</h4>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sort</Accordion.Header>
                            <Accordion.Body>
                                <select name="sort" onChange={handleSort}>
                                    <option value="price">Price</option>
                                    <option value="rating">Rating</option>
                                    <option value="discountPercentage">Discount Percentage</option>
                                </select>
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
                                    style={{ width: '18rem', marginBottom: "20px", height:"420px", borderRadius:"1rem"}} 
                                    key={id}>
                                <Card.Img variant="top" src={image} style={{height:"18vh" , objectFit:"contain", borderTopLeftRadius:"1rem", borderTopRightRadius:"1rem"}}/>
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
        </>
    );
};

export {passSelectedCard};