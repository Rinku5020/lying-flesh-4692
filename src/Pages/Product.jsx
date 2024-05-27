import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';


function Product() {
    const [data, setData] = useState([])
    const fetch = () => {
        axios.get("http://localhost:8080/ProductData")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetch()
    }, [])
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

                        <div className='filterTag'>
                         <label className='d-flex justify-content-between '  ><p>Filter</p> <p>Clear All</p></label>   
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Brand</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>Bewakoof</h6>
                                        <h6>Olivi</h6>
                                        <h6>bewakoof x marvel</h6>
                                        <h6>Bewakoof Air 1.0</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Color</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Size</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Color</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Design</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Sleeve</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Type</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Rating</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
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
                                <img className='p1img' src="https://images.bewakoof.com/uploads/category/desktop/Classic-Fit-T-Shirts_Inside_Desktop-Banner_IK-1706187400.jpg" fluid />

                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row">
                                {data.map((el) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={el.id}>
                                        <div className="card h-100 border-0 shadow-sm">
                                            <div className="position-relative">
                                                <img src={el.image} className="card-img-top" alt={el.title} />
                                                <div className="rate position-absolute bottom-0 end-0 bg-light text-dark p-1 m-2 rounded">
                                                    ⭐ {el.rating}
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="desp font-weight-bold text-capitalize">{el.description}</p>
                                                <p className="titleP text-muted text-capitalize">{el.title}</p>
                                                <h5 className="card-title">{el.price}</h5>
                                                <h6 className="finalP bg-light p-2 d-inline-block">{el.finalPrice} For TriBe Members</h6>
                                                <p className="tagCard border bg-light text-muted p-2 d-inline-block mt-2">100 % COTTON</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Product
