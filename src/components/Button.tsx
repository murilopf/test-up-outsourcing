import React from 'react';
import '../styles/Button.css'

interface Props {
    title: string,
    handleChangeBody: any
}

const Button: React.FC<Props> = ({ title, handleChangeBody }) => (
    <button
        type="button"
        className="button"
        onClick={() => handleChangeBody(title === 'Consultar')}
    >
        {title}
    </button>
)

export default Button

