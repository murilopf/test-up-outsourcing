import React, { useState, useEffect } from 'react'
import '../styles/CharacterDetail.css'
import { getMovieName } from '../services/api'

interface Props {
    showDetail: any,
    character: any
    showFavoriteButton?: boolean
}

const CharacterDetail: React.FC<Props> = ({ showDetail, character, showFavoriteButton = true }) => {

    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState<any>([])

    const handleBackToTable = () => {
        showDetail(false)
    }

    const handleFavoriteCharacter = () => {

        if (localStorage.getItem('@up-outsourcing/favorites') === null) {

            const favorites = [];
            favorites.push(character)
            localStorage.setItem('@up-outsourcing/favorites', JSON.stringify(favorites));

        } else {

            let exist = false
            let favorites: any = localStorage.getItem('@up-outsourcing/favorites');
            favorites = JSON.parse(favorites)

            for (let i = 0; i < favorites.length; i += 1) {
                if (favorites[i].name === character.name) {
                    exist = true
                    break;
                }
            }

            if (!exist) {
                favorites.push(character)
                localStorage.setItem('@up-outsourcing/favorites', JSON.stringify(favorites));
            }

        }
        showDetail(false)
    }

    const getCharacterSex = (value: string) => {
        if (value === 'male')
            return 'Masculino'
        if (value === 'female')
            return 'Feminino'
        return 'Outro'
    }

    const getCharacter = async (url: string) => {
        const res = await getMovieName(url)
        const arrayMovies = movies
        arrayMovies.push(res)
        setMovies(arrayMovies)
        return res;
    };

    useEffect(() => {

        Promise.all(character.films.map((url: string) => getCharacter(url))).then((value) => {
            setLoading(false)
        })

    }, [])

    // Por ser rapido deixei sem um load
    if (loading)
        return (
            <></>
        )

    return (
        <div className='container'>
            <div id="container-title">
                <h1 id="title">{character.name}</h1>
                {
                    showFavoriteButton ?
                        <button id="btn-favorite" className='detail-options ' type="button" onClick={handleFavoriteCharacter}> Favoritar </button>
                        : <></>
                }
                <button id="btn-cancel-favorite" className='detail-options ' type="button" onClick={handleBackToTable}> {showFavoriteButton ? 'Cancelar' : 'Voltar'} </button>
            </div>

            <div id="divider" />

            <div>
                <h2>Informações</h2>
                <span>{`Idade: ${character.birth_year.replace(/\D/g, '')}`}</span>
                <span>{`Altura: ${character.height}cm`}</span>
                <span>{`Peso: ${character.mass}kg`}</span>
                <span>{`Sexo: ${getCharacterSex(character.gender)}`}</span>

                <h2>Filmes</h2>
                <div>
                    {
                        movies.length > 0 ?
                            movies.map((movie: string) => (
                                <span key={movie} style={{ display: 'block' }}>{movie}</span>
                            ))
                            : <span>Não participou de nenhum filme</span>
                    }
                </div>
            </div>

        </div>
    )
}

export default CharacterDetail