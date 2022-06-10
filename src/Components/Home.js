import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../Images/IMG-20210115-WA0025.jpg'
import './Home.css'
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <div className='d-flex m-5 justify-content-center text-white'>
                <div className='p-5'>
                    <p>HI There I am</p>
                    <h1>Shakila Khatun Shely</h1>
                    <h5 className='text-danger'>Front-End Developer</h5>
                    <p>I am Front-end developer and want to develop my skill in this field.</p>
                    <div className='d-flex justify-content-between'>
                        <Link to='/contact' className='btn btn-secondary'>Hire Me</Link>
                        <Link to='/projects' className='text-white fw-bolder border border-success px-3 pt-2 rounded text-decoration-none'>See All My Projedcts</Link>
                    </div>
                </div>
                <div className='ps-5'>
                    <img className='profile' src={profile} alt="" />
                </div>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default Home;