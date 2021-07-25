import React, { useState, useEffect } from 'react'
import '../styles/CharacterDetail.css'
import { getMovieName } from '../services/api'

interface Props {
    showDetail: any,
    character: any
    showFavoriteButton?: boolean
}

const CharacterDetail: React.FC<Props> = ({ showDetail, character, showFavoriteButton = true }) => {

    // const [loading, setLoading] = useState(false)
    // const [movies, setMovies] = useState<any>([])

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
            } else {
                console.log("Personagem já está salvo nos favoritos (:")
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

    // const handleGetMoviesName = async (url: string) => {
    //     const title = await getMovieName(url)
    //     return title
    // }

    // useEffect(() => {
    //     character.films.map(async (movie: string) => {
    //         const res = await handleGetMoviesName(movie)
    //         console.log('Só testando >> ', [...movies, res])
    //         setMovies([...movies, res]);
    //         return res
    //     })
    // }, [])

    // if (loading)
    //     return <h1>carregando</h1>

    if (!character)
        return <h1>error</h1>

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
                <p>{`Idade: ${character.birth_year.replace(/\D/g, '')}`}</p>
                <p>{`Altura: ${character.height}cm`}</p>
                <p>{`Peso: ${character.mass}kg`}</p>
                <p>{`Sexo: ${getCharacterSex(character.gender)}`}</p>

                {/* <h2>Filmes</h2>
                <div>
                    {
                        movies.length > 0 ?
                            movies.map((movie: string) => (
                                <span style={{ display: 'block' }}>{movie}</span>
                            ))
                            : <span>Não participou de nenhum filme</span>
                    }
                </div> */}
            </div>

        </div>
    )
}

export default CharacterDetail