import React from "react";
import './HeaderComponent.css'

const HeaderComponent = () => {
    return(
        <div 
            style = {{
            display: 'flex',
            backgroundColor:'#000000',
            paddingRight:40,
            paddingLeft:40,
            paddingTop:40,
            paddingBottom:0
            }}
        >
        <div 
            className="AppText"
            style = {{
            color: "#FFFFFF",
            fontSize: 50,
            }}
        >
            dlawork9888's worklog !
        </div>
        </div>
    )
}

export default HeaderComponent