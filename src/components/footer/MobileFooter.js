import React from 'react';
import Logo from '../../assets/logoWhite.png';

const MobileFooter = () => {

    const logoStyle ={
        width: '100px',
        height: 'auto'
    };
    
    return(
        <div>
            <img src={Logo} style={logoStyle} alt="logo img" />
        </div>
    );
};

export default MobileFooter;