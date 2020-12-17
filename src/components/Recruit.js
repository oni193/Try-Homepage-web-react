import React from 'react';
import Title from './pageTitle/Title';
import SubTitle from './pageTitle/SubTitle';
import BodyText from './pageTitle/BodyText';

const Recruit = () => {
    const data = {
        title : 'RECRUIT',
        sub : '파인랩을 만들어가는 사람들',
        body : '핀테크를 선도하고 한국 금융을 혁신하고 싶다면 지금 바로 파인랩에 합류하세요'
    };
    return (
        <div>
            <Title text={data.title}/>
            <SubTitle text={data.sub}/>
            <BodyText text={data.body}/>
            <button>채용정보</button>
        </div>
    );    
};

export default Recruit;