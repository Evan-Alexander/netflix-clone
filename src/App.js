import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home'
// import MovieDetail from './MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/:id" children={<MovieDetail />} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
