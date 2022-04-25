import React from 'react';
import '../../Styles/style.css';
interface Props {
    label: string;
    type: string
}
const Button = ({ label, type }: Props) => {
    const className =  `button ${type}`
    return (
        <button className= {className}>
            {label}
        </button>
        )
}

export default Button