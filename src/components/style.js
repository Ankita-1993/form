import React from 'react';

function Header() {
    const style = {
        fontSize: '30px',
        color: 'rgb(71, 70, 70)',
        textAlign: 'center',
        fontStyle: 'inherit',
        border: 'none'
    }
    return(
        <header>
            <h1 style={style}>Please enter your details</h1>
        </header>
    );
}
export default Header;

