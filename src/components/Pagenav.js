import React, { useState, useEffect } from 'react'
import CharacterDisplay from './CharacterDisplay';
import Spinner from './Spinner';


const Pagenav = ({resultsUrl}) => {
 const [results, setResults] = useState([]);
 const [nextPageUrl, setNextPageUrl] = useState(null);
 const [previousPageUrl, setPreviousPageUrl] = useState(null);


 function getResults(targetUrl) {
  fetch(targetUrl).then(response => response.json())
   .then(data => {
    setResults(data.results);
    setNextPageUrl(data.next);
    setPreviousPageUrl(data.previous);
   })
 }

 useEffect(() => {
   getResults(resultsUrl)
 }, [resultsUrl])

 function loadPrevious() {
   getResults(previousPageUrl);
 }

 function loadNext() {
   getResults(nextPageUrl);
 }

 return (
  <>
    {results.length > 0 ? <section className="character-display">{results.map(result => <CharacterDisplay key={result.name} item={result} />)}</section> : <Spinner />}
    <div className="navbtn">
      {previousPageUrl != null ? <button className="navs" onClick={() => loadPrevious()}>Previous</button> : null}
      {nextPageUrl != null ? <button className="navs" onClick={() => loadNext()}>Next</button> : null}
    </div>
  </>

 )
}

export default Pagenav
