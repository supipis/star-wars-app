import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDisplay = ({ item }) => {

	const [homeworld, setHomeworld] = useState("Loading...");
	const [loading, setLoading] = useState(false);


	useEffect(() => {
		const fetchHomeworld = async () => {
			setLoading(true);
			let response = await axios(item.homeworld)
			//console.log(response.data.name)
			setHomeworld(response.data.name)
			setLoading(false)
		}
		fetchHomeworld()
	}, [])

	return (
		<div className="item-details">
			<h1>{item.name}</h1>
			<ul>
				<li>Birth year :{item.birth_year}</li>
				<li>Gender : {item.gender}</li>
				<li>height : {item.height}</li>
				<li>Home world : {homeworld}</li>

			</ul>
		</div>
	)
}

export default CharacterDisplay
