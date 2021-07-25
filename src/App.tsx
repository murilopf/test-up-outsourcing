import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Table from './components/characterTable/Table';
import Favorites from './components/Favorites'
import imgVader from './images/vader.png'

const App: React.FC = () => {
	const [control, setControl] = useState(true)
	const [character, setCharacter] = useState([])

	const handleChangeBody = (value: boolean) => {
		if (control === value) return

		setControl(value)
	}


	return (
		<div id='container'>
			<Header handleChangeBody={handleChangeBody}></Header>
			<img id="app-logo-vader" src={imgVader} alt="" />
			<div>
				{
					control ?
						<div>
							<SearchBar setCharacter={setCharacter} />
							{
								character &&
								<Table characters={character} />
							}
						</div>
						:
						<div>
							{/* <SearchBar /> */}
							<Favorites />
						</div>
				}
			</div>
		</div>
	);
}

export default App;
