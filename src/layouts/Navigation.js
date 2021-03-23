import React from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/Navigation.css";

const Navigation=()=>{
    return(
        <>
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="header_selected">Strona główna</NavLink></li>
                <li><NavLink to="/tattoo-artists" activeClassName="tatto-artists_selected">Tatuatorzy</NavLink></li>
                <li><NavLink to="/gallery" activeClassName="gallery_selected">Galeria</NavLink></li>
                <li><NavLink to="/media" activeClassName="media_selected">Media</NavLink></li>
                <li><NavLink to="/contact" activeClassName="contact_selected">Kontakt</NavLink></li>
            </ul>
        </nav>
        </>
    )
}
export default Navigation;