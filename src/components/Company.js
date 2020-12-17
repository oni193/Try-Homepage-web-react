import React from 'react';
import Title from './pageTitle/Title';

const Company = () => {
    
    const data = {
        title: 'COMPANY'
    };
    return(
        <div>
            <Title text={data.title}/>
        </div>

    );
};

export default Company;