import React from 'react';
import './Brother.css';

const Brother = ({brother, married}) => {
    return (
        <div className='brother'>
            <li>Name: {brother} his {married ? <p>is married</p> : <p>is not married</p> }</li>
        </div>
    );
};

export default Brother;