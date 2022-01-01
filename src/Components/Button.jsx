import React from 'react'
import classes from './classes'

const Button = ({title, style, variant, onClick}) => {
    var buttonType = classes.primaryButton;
    if(variant === "secondary") {
        buttonType = classes.secondaryButton
    }

    return (
        <button 
            style={style} 
            className={buttonType}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button
