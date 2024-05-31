import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Description() {
    const [desData, setDesData] = useState({})
    const { id } = useParams()

    const fetchDes = () => {
        axios.get(`http://localhost:8080/ProductData/${id}`)
            .then((res) => setDesData(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchDes()
    }, [])



    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <label className="d-none d-md-block">
                            <Link className='Link1' to="/">Home /</Link>
                            <Link className='Link1' to="/">Men Clothing /</Link>
                            <Link className='Link1' to="/">T-Shirts for Men /</Link>
                            <Link className='Link1' to="/">classic t-shirt for men </Link>
                        </label>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col lg={2}  className="d-none d-md-block desimg1" >
                                <img width={80} src={desData.image} alt="" />
                                <img width={80} src={desData.image} alt="" />
                                <img width={80} src={desData.image} alt="" />
                                <img width={80} src={desData.image} alt="" />
                            </Col>
                            <Col lg={10}>
                                <img width={400} src={desData.image} alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <h1>{desData.description}</h1>
                        <h2>{desData.title}</h2>
                        <p>{desData.rating}</p>
                        <h3>{desData.finalPrice} <lable>{desData.price} 63% OFF</lable> </h3>
                        <p>inclusive of all taxes </p>
                        <p><label>BUY 3 FOR 999 </label> <label>100% COTTON</label></p>
                        <hr />
                        <p>TriBe members get an extra discount of ₹30 and FREE shipping</p>
                        <hr />
                        <div>
                            <button>ADD TO BAG</button>
                            <button>WISHLIST</button>
                        </div>
                        <hr />
                        <Row>
                            <h5>CHECK FOR DELIVERY DETAILS</h5>
                            <p>Delivering all across India</p>
                            <input type="search" placeholder='Enter Pincode'/>
                            <h4>Key Highlights</h4>
                            <Col lg={6}>

                            </Col>
                            <Col lg={6}>
                                <p></p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Description
