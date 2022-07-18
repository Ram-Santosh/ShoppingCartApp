import { useContext } from "react";
import { passSelectedCard } from "./Products";
import productCat from "./products.json";
import Carousel from 'react-bootstrap/Carousel';

var allProducts = productCat["products"];

export default function CardFocus () {
    var selectedCard = useContext(passSelectedCard);

    var product = allProducts.filter((product) => {
        if (product.id === selectedCard){
            return product;
        }
    })

    return (
        <>
            <Carousel style={{height:"290px", width: '500px'}}>
                {product[0]["images"].map((image) => {
                    var item = 
                    <Carousel.Item interval={1500}>
                        <img
                        className="d-block"
                        src={image}
                        style={{height:"290px", width: '500px', objectFit:"cover"}}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    return item;
                    })
                }  
                

            </Carousel>
        </>
    );
}