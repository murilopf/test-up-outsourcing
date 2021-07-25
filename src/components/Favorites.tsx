import React, { useEffect, useState } from 'react'
import CharacterDetail from './CharacterDetail'
import '../styles/Favorites.css'

const Favorites: React.FC = () => {

    const [showDetail, setShowDetail] = useState(false)
    const [favorites, setFavorites] = useState<[string]>([''])
    const [detailCharacter, setDetailCharacter] = useState<string>('')

    const handleDetailCharacter = (favorite: any) => {
        setDetailCharacter(favorite)
        setShowDetail(true)
    }

    const handleRemoveFromFavorites = (name: string) => {

        let storage: any = localStorage.getItem('@up-outsourcing/favorites')
        storage = JSON.parse(storage)

        for (let i = 0; i < storage.length; i += 1) {
            if (storage[i].name === name) {
                storage.splice(i, 1)
            }
        }

        localStorage.setItem('@up-outsourcing/favorites', JSON.stringify(storage));
        setFavorites(storage)
    }

    useEffect(() => {
        let storage: any = localStorage.getItem('@up-outsourcing/favorites')
        storage = JSON.parse(storage)

        if (!(storage === null)) {
            setFavorites(storage)
        }
    }, [])


    if (showDetail) {
        return (
            <CharacterDetail
                character={detailCharacter}
                showDetail={setShowDetail}
                showFavoriteButton={false}
            />
        )
    }

    if (!favorites.length) {
        return (
            <div>
                <h1> Meus favoritos </h1>
                <span> Você não possui nenhum personagem salvo na sua lista de favoritos </span>
            </div>
        )
    }

    return (
        <div>
            <h1> Meus favoritos </h1>

            {
                favorites.map((favorite: any) => (
                    <div id="fav-container" key={favorite.name}>
                        <span id="fav-name">{favorite.name}</span>
                        <button id="fav-btn-detail" className="fav-btns-favorite" type="button" onClick={() => handleDetailCharacter(favorite)}>Ver detalhes</button>
                        <button id="fav-btn-remove" className="fav-btns-favorite" type="button" onClick={() => handleRemoveFromFavorites(favorite.name)}>Revemos dos favoritos</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Favorites