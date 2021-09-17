import { getSuggestedQuery } from '@testing-library/react'
import React, { useState } from 'react'

const Search = (getQuery) => {
	const [text, setText] = useState('')

	const onChange = (q) => {
		setText(q)
		getQuery(q)
	}

	return (
		<section>
			<form>
				<input type="text"
					placeholder="Search"
					autoFocus
					value={text}
					onChange={(e) => onChange(e.target.value)} />
			</form>

		</section>
	)
}

export default Search
