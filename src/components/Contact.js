import React from 'react';
import Title from './pageTitle/Title';
import BodyText from './pageTitle/BodyText';
import Map from './Map';
// 아이콘
import marker from '../assets/marker.png';
import phone from '../assets/phone.png';

const Contact = () => {

    const data ={
        title: 'CONTACT',
        body: ['서울 강남구 테헤란로 623 14층',
                '02-3453-3864']
    }

    const contactStyle ={
        borderTop :'3px solid #c0eb75'
    }
    
    return (
        <div style={contactStyle}>
        <Title text={data.title}/>
        <img src={marker}/><BodyText text={data.body[0]}/>
        <img src={phone}/><BodyText text={data.body[1]}/>
        <Map />
        </div>
    );
}
export default Contact;