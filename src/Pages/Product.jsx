import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function Product() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <label className="d-none d-md-block">
                            <Link className='Link1' to="/">Home /</Link>
                            <Link className='Link1' to="/">Men Clothing /</Link>
                            <Link className='Link1' to="/">T-Shirts for Men /</Link>
                            <Link className='Link1' to="/">classic t-shirt for men </Link>
                        </label>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 ">
                    <Col>
                        <h3 className="text-center text-md-start">Men's Classic Fit T-shirt</h3>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={3} className="d-none d-md-block">
                        <p>Filter</p>
                    </Col>
                    <Col sm={9}>
                    <div className="d-none d-md-block">
                    <div className='d-flex justify-content-end mt-5'>
                    <lable className="mr-2"> <lable className="boldtag">SORT BY</lable> 
                    <select className='tag1'>
                        <option value="">Populer</option>
                        <option value="">New</option>
                        <option value="">Price: High to Low</option>
                        <option value="">Price: Low to High</option>
                    </select>
                    </lable>
                    </div>
                    <div>
                        <img  className='p1img'  src="https://images.bewakoof.com/uploads/category/desktop/Classic-Fit-T-Shirts_Inside_Desktop-Banner_IK-1706187400.jpg" fluid />
                    
                    </div>
                    </div>
                    
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Product
