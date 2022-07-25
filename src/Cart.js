import { useSelector } from "react-redux"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import cartImg from "./cart.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Cart () {
    var cart = useSelector((state) => state.cart)
    var navigate = useNavigate();
    var cartCount = useSelector((state)=> state.cartCount);
    var allProducts = useSelector((state) => state.allProducts);

    var handleNav = () => {
        navigate("/Products");
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
                <h3>Shopping Cart</h3>

                {allProducts.filter((item)=>{
                    if (item.id in cart) {
                        var card = <Row>
                            <Col>
                                <img src={item.thumbnail} alt="thumnail"></img>
                            </Col>
                            <Col>
                                <h4>{item.title}</h4>
                                <p>Stock: {item.stock}</p>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        return card;
                    }
                })}
            </Container>
        </>
    )
}