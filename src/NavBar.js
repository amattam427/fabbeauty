import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    const navStyles={
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 500px 6px",
        background: "lavender",
        color: 'magenta',
        fontFamily: 'arial'
    };

    return(
        <div>
            <NavLink to='/'
            exact
            style={navStyles}>
                Home
            </NavLink>
        </div>
    )

}



export default NavBar;