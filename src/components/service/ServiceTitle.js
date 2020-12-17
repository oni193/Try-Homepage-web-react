import React from 'react';
import Bar from '../../assets/barWhite.png';

const ServiceTitle = ({text}) => {
    const serviceTitleStyle = {
        color:'white',
        fontweight:'bold'
    };
    const barStyle = {
        width: '4px',
        height: 'auto',
    };
    
    return(
        <div>
        <img src={Bar} style={barStyle} alt="Bar" />
        <div style={serviceTitleStyle}>{text}</div>
        </div>
    );
};

export default ServiceTitle;