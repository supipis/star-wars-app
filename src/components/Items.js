import React from 'react'
import CharacterDisplay from './CharacterDisplay';

const Items = ({ items, loading }) => {
	if (loading) {
		return <h2>Loading.....</h2>
	}
	return (
		<section className="character-display">
			{items.map((item, i) => (

				<CharacterDisplay key={i} item={item}></CharacterDisplay>


			))}
		</section>
	);
}

export default Items
