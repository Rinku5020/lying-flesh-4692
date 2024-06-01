import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';


function Product() {
    const [data, setData] = useState([])
    const [sort, setSort] = useState(null)
    const [filter, setFilter] = useState(null)
    const [page, setPage] = useState(1)
    const [Pagelimit, setPageLimit] = useState(1)
    console.log(sort)
    const fetch = () => {
        axios.get("http://localhost:8080/ProductData",
            {
                params:
                {
                    _sort: "price",
                    _order: sort,
                    description: filter,
                    _limit: "6",
                    _page: page
                }
            })
            .then((res) => {
                setPageLimit(res.headers["x-total-count"])
                setData(res.data)

            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetch()
    }, [sort, filter, page])

    const handleFilterChange = (filterValue) => {
        setFilter(filterValue);
    }

    const clearFilters = () => {
        setFilter(null);
    }


    return (
        <div className='font-face-gm'>
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
                            <label className='d-flex justify-content-between'>
                                <p className='filterP'>FILTERS</p>
                                <p className='filterP' onClick={clearFilters} style={{ cursor: 'pointer' }}>Clear All</p>
                            </label>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header >Brand</Accordion.Header>
                                    <Accordion.Body>
                                        <h6 onClick={() => handleFilterChange('Bewakoof')} style={{ cursor: "pointer" }}>Bewakoof</h6>
                                        <h6 onClick={() => handleFilterChange('Olivi')} style={{ cursor: "pointer" }}>Olivi</h6>
                                        <h6 onClick={() => handleFilterChange('bewakoof x marvel')} style={{ cursor: "pointer" }}>bewakoof x marvel</h6>
                                        <h6 onClick={() => handleFilterChange('Bewakoof Air 1.0')} style={{ cursor: "pointer" }}>Bewakoof Air 1.0</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Color</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Size</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Design</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Sleeve</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Type</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Rating</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                        <h6>#Blank</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
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
                    <Col sm={9} className="main-content">
                        <div className="d-none d-md-block">
                            <div className='d-flex justify-content-end mt-5'>
                                <label className="mr-2">
                                    <span className="boldtag">SORT BY</span>
                                    <select className='tag1' onChange={(e) => setSort(e.target.value)}>
                                        <option value="asc">Low To High</option>
                                        <option value="desc">High To Low</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <img className='p1img' src="https://images.bewakoof.com/uploads/category/desktop/Classic-Fit-T-Shirts_Inside_Desktop-Banner_IK-1706187400.jpg" alt="Banner" fluid="true" />
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row">
                                {data.map((el) => (

                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={el.id} >
                                        <Link className='LinkType' to={`/description/${el.id}`} >
                                            <div className="card h-100 border-0 shadow-sm">
                                                <div className="position-relative">
                                                    <img src={el.image} className="card-img-top imgCard" alt={el.title} />
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
                                        </Link>
                                    </div>

                                ))}
                            </div>
                            <div className='d-flex justify-content-between'>
                                <button className='btnPng' disabled={page == 1} onClick={() => setPage(page - 1)}>Pre</button>
                                <button className='btnPng' disabled>{page}</button>
                                <button className='btnPng' disabled={page == Math.ceil(Pagelimit / 6)} onClick={() => setPage(page + 1)}>Next</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Product
