import React, { useState, useEffect } from 'react'
import '../styles/CharacterDetail.css'
import { getMovieName } from '../services/api'

interface Props {
    showDetail: any,
    character?: any
}

const CharacterDetail: React.FC<Props> = ({ showDetail, character }) => {

    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState<any>([])

    const handleBackToTable = () => {
        showDetail(false)
    }

    const handleFavoriteCharacter = () => {
        console.log('Favotira o character')
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

    if (loading)
        return <h1>carregando</h1>

    if (!character)
        return <h1>error</h1>

    console.log('o que nos movies? ', movies)

    return (
        <div className='container'>
            <div>
                <h1>{character.name}</h1>
                <button type="button" onClick={handleBackToTable}> Cancelar </button>
                <button type="button" onClick={handleFavoriteCharacter}> Favoritar </button>
            </div>

            <div> divider </div>

            <div>
                <h3>Infos</h3>
                <span>{`Idade: ${character.birth_year.replace(/\D/g, '')}`}</span>
                <span>{`Altura: ${character.height}cm`}</span>
                <span>{`Peso: ${character.mass}kg`}</span>
                <span>{`Sexo: ${getCharacterSex(character.gender)}`}</span>

                {/* <h3>Filmes</h3>
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