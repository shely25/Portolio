import React from 'react';
import { Card } from 'react-bootstrap';
import './Skill.css'

const Skill = (props) => {
    const { name, image } = props.data
    return (
        <div className='w-25'>
            <img className='logo' src={image} alt="" />
            <h5>{name}</h5>
        </div>
    );
};

export default Skill;