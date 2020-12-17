import React from 'react';
import Title from './pageTitle/Title';
import SubTitle from './pageTitle/SubTitle';
import BodyText from './pageTitle/BodyText';

const Company = () => {
    
    const data = {
        title: 'COMPANY',
        sub: ['편의성에 집중한','금융 서비스를 만듭니다'],
        body: ['금융 서비스는 전문가와 고객의 입장을 모두 고려하여 Online-to-Offline이 설계되어야 한다고 믿습니다.',
                '파인랩은 대면채널로 축적된 경험을 바탕으로 전문가와 고객이 경험하고 있는 정보의 비대칭성과, 업무의 비효율성을 해결 할 수 있는 금융 서비스와 시스템을 구축하고자 합니다.']
    };
    return(
        <div>
            <Title text={data.title}/>
            <SubTitle text={data.sub[0]}/>
            <SubTitle text={data.sub[1]}/>
            <BodyText text={data.body[0]}/>
            <BodyText text={data.body[1]}/>
        </div>

    );
};

export default Company;