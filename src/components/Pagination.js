import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<nav>
			<ul>
				{pageNumbers.map(number => (
					<li key={number}>
						<a onClick={() => paginate(number)} href="!#">
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Pagination


/* function ResultsPage(){
	const [results, setResults] = useState([]);
	const [nextPageUrl, setNextPageUrl] = useState(null);
	const [previousPageUrl, setPreviousPageUrl] = useState(null);

	getResults(targetUrl){
	    fetch(targetUrl).then(response => response.json())
	       .then(data => {
		setResults(data.results);
		setNextPageUrl(data.next);
		setPreviousPageUrl(data.previous);
	    });
	}

	useEffect(() => {
	    getResults(INITIAL_URL);
	});

	loadPrevious(){
	    getResults(previousPageUrl);
	}

	loadNext(){
	    getResults(nextPageUrl);
	}

	return <>
	   {results.length > 0 ? results.each(result => <Result result={result)}/> : <p>No results yet</p>)}
	   {previousPageUrl != null ? <Button onClick={() => loadPrevious()}>Previous</Button> : null}
	   {nextPageUrl != null ? <Button onClick={() => loadNext()}>Next</Button> : null}
	</>

    }

 */