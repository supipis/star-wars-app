import React from 'react'
import Info from './Info';

const Items = ({ items, loading }) => {
	if (loading) {
		return <h2>Loading.....</h2>
	}
	return (
		<ul>
			{items.map((item, i) => (
				<li key={i}>
					<h1>{item.name}</h1>
					<p>Birth: {item.birth_year}</p>
					<p>Gender: {item.gender}</p>
					<p>Planet: </p>
					<p>Vehicle:</p>
					<p>Films: {item.starships.name}</p>
				</li>

			))}
		</ul>
	);
}

export default Items
