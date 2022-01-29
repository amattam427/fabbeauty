import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    const navStyles={
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 600px 6px",
        background: "lavender",
        color: 'magenta',
        fontFamily: 'arial', 
        textAlign: 'center'
    };

    return(
        <div>
            <NavLink to='/'
            exact
            style={navStyles}>
                Home
            </NavLink>

            <NavLink to='/newform'
            exact
            style={navStyles}>
                Add a New Product
            </NavLink>
        </div>
    )

}



export default NavBar;