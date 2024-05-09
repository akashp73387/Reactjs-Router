import React from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
    const navigate=useNavigate()
    const handlesubmit =()=>{
        navigate('/')
    }
    return (
        <div>
            <h1>Skills</h1>
            <button onClick={handlesubmit}>Home</button>
        </div>
    );
};

export default Skills;