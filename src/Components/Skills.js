import React from 'react';
import './Skills.css'

const Skills = () => {
    // const datas = [
    //     {
    //         name: 'HTML',
    //         image: 'https://i.ibb.co/dL4KHrf/html.png'
    //     },
    //     {
    //         name: 'JS',
    //         image: 'https://i.ibb.co/tMBpX6y/js.png'
    //     },
    //     {
    //         name: 'React JS',
    //         image: 'https://i.ibb.co/QPsTt9S/react.png'
    //     }
    // ]
    return (
        <div className='text-white design'>
            <h1 className='text-center title'>I am good at</h1>
            <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JS</li>
                <li>React JS</li>
                <li>MongoDb</li>
                <li>NodeJS</li>
            </ul>
        </div>
    );
};

export default Skills;