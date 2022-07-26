import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";

export default function AddProducts () {
    var navigate = useNavigate();
    var handleAddProduct = () => {

    }

    var handleNav = () => {
        navigate("/Products");
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
            <Container>
                <h3>Add a product</h3>
                <Form className='p-4' style={{border:"outset"}} onSubmit={handleAddProduct}>
                    <Form.Group className="mb-3" controlId="formID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="number" placeholder="Enter ID" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDiscountPercentage">
                        <Form.Label>Discount Percentage</Form.Label>
                        <Form.Control type="number" placeholder="Enter Discount Percentage" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" placeholder="Enter Rating" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formStock">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="number" placeholder="Enter Stock" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBrand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder="Enter Brand" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Category" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formThumbnail">
                        <Form.Label>Thumbnail</Form.Label>
                        <Form.Control type="text" placeholder="Enter Thumbnail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formImages">
                        <Form.Label>Images</Form.Label>
                        <Form.Control type="text" placeholder="Enter Images" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}