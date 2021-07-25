/* eslint-disable camelcase */
import React, { useState } from 'react'
import '../../styles/characterTable/Table.css'
import CharacterDetail from '../CharacterDetail'

interface Character {
    name: string,
    height: string,
    mass: string,
    birth_year: string,
    gender: string,
    films: Array<string>,
}

interface Props {
    characters?: Character[]
}

const CharactersTable: React.FC<Props> = ({ characters }) => {

    const [showDetail, setShowDetail] = useState<boolean>(false)
    const [selectedCharacter, setSelectedCharacter] = useState()

    const handleDetailCharacter = (infos: any) => {
        setShowDetail(true)
        setSelectedCharacter(infos)
    }

    if (showDetail) {
        return (
            <CharacterDetail
                showDetail={setShowDetail}
                character={selectedCharacter}
            />
        )
    }

    return (
        <table>
            {
                characters && characters.length > 0 ?
                    <>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Filmes</th>
                        </tr>
                        {
                            characters.map((character) => (
                                // <TableRow value={value}></TableRow>
                                <tr onClick={() => handleDetailCharacter(character)} key={character.name}>
                                    <td>{character.name}</td>
                                    <td>{character.birth_year.replace(/\D/g, '')}</td>
                                    <td>{character.films.length}</td>
                                </tr>
                            ))
                        }
                    </>

                    : <>
                        <tr>
                            <td>

                                <span> Nenhum personagem encontrado</span>
                            </td>
                        </tr>
                    </>
            }
        </table>
    )
}

export default CharactersTable