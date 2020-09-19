import React from 'react'
import { Link } from 'react-router-dom'
const Header = ()=>{
    return(
        <div>
            <h2>2 IN 1 App</h2>
            <Link to='/contact' >Contact</Link>
            <Link to='/about' >About Us</Link>
        </div>
    )
}

export default Header