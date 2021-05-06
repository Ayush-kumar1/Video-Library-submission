import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <span style={{width: "100%", backgroundColor: "#39445a",paddingbottom: "15px",color: "white"}}
            className="nav" onClick={()=> window.scroll(0,0)}>📹 Video Library ⏯️</span>
        </div>
    )
}

export default Header
