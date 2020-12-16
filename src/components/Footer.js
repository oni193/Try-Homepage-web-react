import React from 'react';
import MobileFooter from './footer/MobileFooter';

const Footer = () => {
    const companyInfo = [
        '파인랩주식회사',
        '사업자 등록번호: 204-86-45452 대표:정동훈, 남기영',
        '서울특별시 강남구 테헤란로 623 14층',
        '(우편번호:06173) 통신판매신고번호: 2015-서울강남-01503',
    ];

    return(
        <div style={{backgroundColor:'#2f9e44'}}>
            <div>
              <MobileFooter companyInfo={companyInfo} />
            </div>            
        </div>
    );
}

export default Footer;
