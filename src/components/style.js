import React from 'react';

function Header() {
    const style = {
        fontSize: '30px',
        color: 'rgba(0, 0, 0, 0.884)',
        textAlign: 'center',
        fontStyle: 'inherit'
    }
    return(
        <header>
            <h1 style={style}>Please enter your details</h1>
        </header>
    );
}
export default Header;

