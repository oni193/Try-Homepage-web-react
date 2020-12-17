import React from 'react';

const ServiceSubtitle = ({text}) => {
    const serviceSubStyle = {
        color:'yellow',
        fontweight:'bold'
    };

    return(
        <div style={serviceSubStyle}>{text}</div>
    );
};

export default ServiceSubtitle;