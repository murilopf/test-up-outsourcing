import React, { useState } from 'react';
import '../styles/SearchBar.css';
import { getCharacterByText } from '../services/api';

interface Props {
    setCharacter?: any
}

const SearchBar: React.FC<Props> = ({ setCharacter }) => {

    const [value, setValue] = useState<string>('')

    const handleSearchByText = async (event: any) => {
        event.preventDefault();
        const data = await getCharacterByText(value)

        if (data && data.results && data.results.length > 0) {
            setCharacter(data.results)
        } else {
            setCharacter([])
        }
    }

    const handleChangeInput = (event: any) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <h1>Consultar</h1>
            <input
                id="input"
                type="text"
                value={value}
                placeholder="Exemplo: Luke, Darth Vader"
                onChange={handleChangeInput}
            />
            <button
                id="button"
                type="button"
                onClick={handleSearchByText}
            >
                Consultar
            </button>
        </div>
    )
}

export default SearchBar