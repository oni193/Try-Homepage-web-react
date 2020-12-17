import React from 'react';
import Bar from '../../assets/barBlue.png';

const Title = ({text}) => {

    const titleStyle = {
        display: 'inline'
    }
    const barStyle = {
        width: '4px',
        height: 'auto',
    };
    
    return(
        <div style={titleStyle}>
            <img src={Bar} style={barStyle} alt="Bar" />
            <div>{text}</div>            
        </div>
    );
};

export default Title;