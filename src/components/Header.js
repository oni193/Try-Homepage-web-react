import React from 'react';
import Title from './pageHeader/HeaderTitle';
import SubTitle from './pageHeader/HeaderSubTitle';
import ThirdTitle from './pageHeader/HeaderThirdTitle';

// import background from '../../assets/headerImg';

const Header = () => {
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        textAlign: 'center',
        backgroundColor: '#f59f00'
        // Imagebackground: background
    };

    const headerData = {
        title:'FINE LAB',
        subTitle:'Online-to-Offline Care Service를 추구합니다',
        thirdTitle:'컨텐츠 및 데이터 융합을 통해 기업의 Digital Marketing 및 세일즈 역량을 향상시키고 불필요한 수작업을 전산/자동화하여 업무의 효율성을 높이며 사람들에게 Online-to-Offline Life Care Service를 제공하는 기업-고객 연계플랫폼을 만들고자 합니다.'
    };
    
    return(
        <div style={headerStyle}>
            <Title text={headerData.title}/>
            <SubTitle text={headerData.subTitle}/>
            <ThirdTitle text={headerData.thirdTitle}/>
        </div>
                
    );
};

export default Header;