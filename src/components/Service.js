import React from 'react';
import Title from './pageTitle/Title';
// import SubTitle from './pageTitle/SubTitle';
// import BodyText from './pageTitle/BodyText';

const Service = () => {
    const serviceStyle ={
        backgroundColor : '#ffec99',
        width: 'auto',
        height: '300px',
    }
    const data = {
        title: 'SERVICE'
    };
    return(
        <div style={serviceStyle}>
            <Title text={data.title}/>
        </div>

    );
}

export default Service;