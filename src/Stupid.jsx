import React from 'react';
import './Stupid.css';

const Stupid = ({stupid}) => {
    
    return (
        <div className='stupid'>
            <p>Stupid Name: {stupid.name}</p>
        </div>
    );
};

export default Stupid;