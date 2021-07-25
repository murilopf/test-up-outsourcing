import React from 'react'
import Button from './Button'
import '../styles/Header.css'

interface Props {
    handleChangeBody: any
}

const Header: React.FC<Props> = ({ handleChangeBody }) => (
    <div id="header">
        <Button title="Consultar" handleChangeBody={handleChangeBody} />
        <Button title="Favoritos" handleChangeBody={handleChangeBody} />
    </div>
)

export default Header
