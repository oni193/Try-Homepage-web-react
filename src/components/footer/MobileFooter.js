import React from 'react';
import Logo from '../../assets/logoWhite.png';

const MobileFooter = () => {

    const componentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100px',
        background: 'GREEN'
    }

    const logoStyle = {
        width: '91px',
        height: 'auto'
    }
    
    const company = companyInfo.map((data, i) => (
        <div key={'info' + i}>
            {data}
        </div>
    ));
  
    return(
            <div style={componentStyle}>
                <img src={Logo} style={logoStyle} alt="logo img" />
                <div>{company}</div>
            </div>
    );
};

export default MobileFooter;