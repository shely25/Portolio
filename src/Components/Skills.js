import React from 'react';
import Skill from './Skill'
import './Skills.css'

const Skills = () => {
    const datas = [
        {
            name: 'HTML',
            image: 'https://i.ibb.co/dL4KHrf/html.png'
        },
        {
            name: 'JS',
            image: 'https://i.ibb.co/tMBpX6y/js.png'
        },
        {
            name: 'React JS',
            image: 'https://i.ibb.co/QPsTt9S/react.png'
        }
    ]
    return (
        <div>
            <h1 className='m-5 mb-0 pt-5'>Skills</h1>
            <div className='forgrid'>
                {
                    datas.map(data => <Skill data={data}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;