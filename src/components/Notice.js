import React from 'react';
import Title from './pageTitle/Title';
import SubTitle from './pageTitle/SubTitle';

const Notice = () => {
    const data = {
        title: 'NOTICE',
        sub: '공지사항'
    };
    return(
        <div>
        <Title text={data.title}/>
        <SubTitle text={data.sub}/>
        </div>
    );
};
export default Notice;