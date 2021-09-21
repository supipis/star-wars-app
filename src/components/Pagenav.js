import React from 'react'

const Pagenav = () => {
	return (
		<div className="pageNav">
			<button className="pageNav__prev navs">PREV</button>
			<button className="pageNav__next navs"><a href="https://swapi.dev/api/people/?page=2">NEXT</a></button>
		</div>
	)
}

export default Pagenav
