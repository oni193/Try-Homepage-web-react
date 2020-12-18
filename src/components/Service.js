import React from 'react';
import ServiceTitle from './service/ServiceTitle';
// import ServiceSlider from './service/ServiceSlider';
import TrySlide from './service/TrySlide';

const Service = () => {
    const serviceStyle ={
        backgroundColor : '#e67700',
        width: 'auto',
        height: '300px',
    }
    const data = {
        title: 'SERVICE',
    };

    return(        
         <div style={serviceStyle}>
             <ServiceTitle text={data.title}/>
             <TrySlide/>
         </div>
    );
}

export default Service;