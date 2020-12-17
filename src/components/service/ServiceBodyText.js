import React from 'react';

const ServiceBodyText = ({text}) => {
    const serviceBodyStyle = {
        color:'red',
    };

    return(
        <div style={serviceBodyStyle}>{text}</div>
    );
};

export default ServiceBodyText;