import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
// api key 'd829137bb17cce3541db21a3b6a2cba1'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action & Adventure" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
