import React from 'react'
import Button from './Button'
import '../styles/Header.css'
import logo from "../images/Star_Wars_Logo.svg"

interface Props {
    handleChangeBody: any
}

const Header: React.FC<Props> = ({ handleChangeBody }) => (
    <div id="header">
        <Button title="Consultar" handleChangeBody={handleChangeBody} />
        <img id="header-logo" src={logo} alt="" />
        <Button title="Favoritos" handleChangeBody={handleChangeBody} />
    </div>
)

export default Header
