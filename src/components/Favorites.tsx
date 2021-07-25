import React, { useState } from 'react'
import CharacterDetail from './CharacterDetail'

const Favorites: React.FC = () => {

    const [showDetail, setShowDetail] = useState(false)

    const handleDetailCharacter = () => {
        setShowDetail(true)
    }

    const handleRemoveFromFavorites = () => {
        console.log('Remove dos favoritos personagem')
    }

    if (showDetail) {
        return (
            <CharacterDetail showDetail={setShowDetail} />
        )
    }

    return (
        <div>
            <h1> Personagens salvos </h1>

            <table>
                <tr>
                    <td>data</td>
                    <td><button type="button" onClick={handleDetailCharacter}>Ver detalhes</button></td>
                    <td><button type="button" onClick={handleRemoveFromFavorites}>Revemos dos favoritos</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Favorites