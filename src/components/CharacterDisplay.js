import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDisplay = ({ item }) => {

	const [homeworld, setHomeworld] = useState("Loading...");
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);


	useEffect(async () => {
		const fetchHomeworld = async () => {
			setLoading(true);
			let response = await axios(item.homeworld)
			//console.log(response.data.name)
			setHomeworld(response.data.name)
			setLoading(false)
		}
		await fetchHomeworld()
	}, [])


	return (
		<div className="item-details">
			<div className="item-details__mini">
				<button onClick={() => setShow(!show)}><h1>{item.name}</h1></button>
				{
					show ? <ul>
				<li>Birth year :{item.birth_year}</li>
				<li>Gender : {item.gender}</li>
				<li>Height : {item.height}</li>
				<li>Home world : {homeworld}</li>

					</ul> : null}
				


			</div>
		</div>
	)
}

export default CharacterDisplay
