import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

const STYLE=['btn--primary','btn--outline']
const SIZE=['btn--medium','btn--large']
const Button = ({path,children,type,onClick,buttonStyle,buttonSize,isButton}) => {
    const checkButtonStyle=STYLE.includes(buttonStyle)?buttonStyle:STYLE[0];
    const customButtonSize=SIZE.includes(buttonSize)?buttonSize:SIZE[0]
    return (<>
   {!isButton? <Link to={path} className="btn-mobile"><button className={`btn ${checkButtonStyle} ${customButtonSize}`} onClick={onClick} type={type}>
        {children}</button></Link>:
    <div className="btn-mobile"><input className={`btn btn--primary ${customButtonSize}`} placeHolder="Search Here" type={type}/></div>
     } </> )
}

export default Button
