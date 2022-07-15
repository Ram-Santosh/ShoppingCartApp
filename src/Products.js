import productCat from "./products.json";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Products () {
    return (
    <>
        <Container>
        <Row>
            <Col>1 of 3</Col>
            <Col xs={3}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
        </Row>
        </Container>
        
        {productCat["products"].map((product,id) => {
            var image = product["images"][0];
            var title = product["title"];
            var price = product["price"];
            var category = product["category"];
            var rating = product["rating"];

           var card = <Card style={{ width: '18rem' }} key={id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Price: ${price}</Card.Text>
            <Card.Text>Category: {category}</Card.Text>
            <Card.Text>Rating: {rating}</Card.Text>
            </Card.Body>
            </Card>;

            return card;
        })
        }
    </>
    );
}