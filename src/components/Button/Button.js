import React, { Children } from "react";
const Button = ({ handleClick, color, children }) => {
    return (
        <button onClick={handleClick} style={{ color: color }}> {Children}
        </button>
    )
}
export default Button