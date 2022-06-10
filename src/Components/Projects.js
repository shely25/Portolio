import React from 'react';
import { Card } from 'react-bootstrap';
import './Projects.css'
import electric from '../Images/banner.jpg'
import marriege from '../Images/marriage-1.jpg'
import warehouse from '../Images/Banner1.jpg'

const Projects = () => {
    return (
        <div className='m-5'>
            <h1 className='text-white text-center'>My created Projects</h1>
            <div className='projects mt-5'>
                <div className=''>
                    <Card style={{ width: '24rem', height: '530px' }}>
                        <Card.Img variant="top" src={electric} />
                        <Card.Body>
                            <Card.Title>Electric House</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li> Full-stack website with admin panel (admin-email:
                                        shelyshely@gmail.com
                                        Password-12345678)
                                    </li>
                                    <li>  Admin have access of some special route. User and admin
                                        have different dashboard.</li>
                                    <li> Only admin can make another user an admin.
                                    </li>
                                </ul>
                            </Card.Text>
                            <a href="https://electric-house-13aef.firebaseapp.com/" target='_blank' className='text-black text-decoration-none  px-3 rounded-pill' style={{ border: '1px solid black' }}>Live-Site</a>
                            <a href="https://github.com/shely25/ManufacturerWebsite" className='text-black ms-3 text-decoration-none  px-3 rounded-pill' style={{ border: '1px solid black' }}>client-side</a>
                            <a href="https://github.com/shely25/ManufactureWebsite-serverSite" className='text-black ms-3 text-decoration-none  px-3 rounded-pill' style={{ border: '1px solid black' }}>Server Site</a>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '24rem', height: '530px' }}>
                        <Card.Img style={{ height: "350px" }} variant="top" src={warehouse} />
                        <Card.Body>
                            <Card.Title>Fashion Franzy</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>MongoDB is used as database and data has been fetched
                                        from database and showed using card in website.</li>
                                    <li> Firebase Authentication and protected route has been
                                        implemented.Logged in user will see extra route.</li>
                                    <li>Logged in user will see extra route.</li>
                                </ul>
                            </Card.Text>
                            <a href="https://dress-warehouse-management.web.app/" target='_blanck' className='text-black text-decoration-none  px-3 rounded-pill' style={{ border: '1px solid black' }}>Live-Site</a>
                            <a href="https://github.com/shely25/WWarehouseManagement-ClientSide" className='text-black ms-3 text-decoration-none  px-3 rounded-pill' style={{ border: '1px solid black' }}>client-side</a>
                            <a href="https://github.com/shely25/Warehouse-server-site" className='text-black ms-3 text-decoration-none  px-3 rounded-pill' style={{ border: '1px solid black' }}>Server Site</a>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '23rem', height: '530px' }}>
                        <Card.Img style={{ height: "350px" }} style={{ height: "350px" }} variant="top" src={marriege} />
                        <Card.Body>
                            <Card.Title>EYE MASTER</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>No database is connected and fake-data is used to fetched
                                        data and data has been showed in card in the website.</li>
                                    <li> Firebase is used to implement authentication.
                                    </li>
                                    <li>Protected route has been implemented.</li>
                                </ul>
                            </Card.Text>
                            <a href="https://wedding-photography-2c5a0.firebaseapp.com/" target='_blanck' className='text-black text-decoration-none  px-3 rounded-pill' style={{ border: '1px solid black' }}>Live-Site</a>
                            <a href="https://github.com/shely25/Weeding-Photography" className='text-black ms-3 text-decoration-none  px-3 rounded-pill' style={{ border: '1px solid black' }}>client-side</a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Projects;