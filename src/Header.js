import React from 'react';

function Header(){
    const headerStyle={
        color: 'magenta',
        fontFamily: 'cursive',
        textAlign: 'center',
        fontSize:'60px'
    }
    return(
        <header>
            <h1 style={headerStyle}>
                    FabBeauty
                <span className='logo' role='img'>
                💄
                </span>
            </h1>
        </header>
    )
}

export default Header;