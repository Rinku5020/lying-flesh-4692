import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoBagHandleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";




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
    }, [id])



    return (
        <div className='font-face-gm'>
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
                            <Col lg={2} className="d-none d-md-block desimg1" >
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
                    <Col className='desAll' lg={6}>
                        <h1>{desData.description}</h1>
                        <h2>{desData.title}</h2>
                        <p className='ratedes'>⭐ {desData.rating}</p>
                        <h3>{desData.finalPrice} 
                        
                        <s className="cutPrice" >{desData.price}</s>
                        <label className='off'>
                        {Math.round(((desData.price - desData.finalPrice) / desData.price) * 100)}%OFF </label>
                        </h3>
                        <p className='taxs'>inclusive of all taxes </p>
                        <p><label className='offer'>BUY 3 FOR 999 </label> <label className='desbr'>100% COTTON</label></p>
                        <hr className='hrBold' />
                        <p className='desTag'>TriBe members get an extra discount of ₹30 and FREE shipping</p>
                        <hr className='hrBold' />
                        <div>
                            <button className='Add'><IoBagHandleOutline /> ADD TO BAG</button>
                            <button className='WishList'><CiHeart /> WISHLIST</button>
                        </div>
                        <hr className='hrBold' />
                        <Row>
                            <h5 className='location'><CiLocationOn size={25} /> CHECK FOR DELIVERY DETAILS</h5>
                            <p className='locaP'>Delivering all across India</p>
                            <input type="search" placeholder='Enter Pincode' />
                            <h4>Key Highlights</h4>
                            <Col lg={6}>
                                <p>Design</p>
                                <h5>Typography</h5>
                                <hr className='hrBold' />
                                <p>Neck</p>
                                <h5>Round Neck</h5>
                                <hr className='hrBold' />
                                <p>Sleeve Style</p>
                                <h5>Half Sleeve</h5>
                                <hr className='hrBold' />

                            </Col>
                            <Col lg={6}>
                                <p>Fit</p>
                                <h5>Regular Fit</h5>
                                <hr className='hrBold' />
                                <p>Material</p>
                                <h5>Cotton</h5>
                                <hr className='hrBold' />
                              
                            </Col>
                        </Row>
                        <Row>
                            
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Description
