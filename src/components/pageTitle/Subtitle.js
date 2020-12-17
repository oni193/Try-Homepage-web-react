import React from 'react';

const SubTitle = ({text}) => {
    
    const subTitle = {
        fontWeight: 'bold'
    };
    return(
        <div style={subTitle}>{text}</div>
    );
}

export default SubTitle;