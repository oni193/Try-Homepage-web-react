import React from 'react';
// import background from '../../assets/headerImg';

const Header = () => {
    const HeaderStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        textAlign: 'center',
        backgroundColor: '#f59f00'
        // Imagebackground: background
    };

    
    return(
        <div style={HeaderStyle}>
            Header!
        </div>
                
    );
};

export default Header;