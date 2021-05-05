import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <span className="header" onClick={()=> window.scroll(0,0)}>📹 Video Library ⏯️</span>
        </div>
    )
}

export default Header
