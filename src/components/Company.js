import React from 'react';
import Title from './pageTitle/Title';
import SubTitle from './pageTitle/SubTitle';

const Company = () => {
    
    const data = {
        title: 'COMPANY',
        sub: ['편의성에 집중한','금융 서비스를 만듭니다'],
    };
    return(
        <div>
            <Title text={data.title}/>
            <SubTitle text={data.sub[0]}/>
            <SubTitle text={data.sub[1]}/>
        </div>

    );
};

export default Company;