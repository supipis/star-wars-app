import React from 'react'

const CharacterDisplay = ({ item }) => {
	return (
		<div className="item-details">
			<h1>{item.name}</h1>
			<ul>
				<li>Birth year :{item.birth_year}</li>
				<li>Gender : {item.gender}</li>
				<li>height : {item.height}</li>
				<li>Home world : {item.homeworld}</li>

			</ul>
		</div>
	)
}

export default CharacterDisplay
