import './App.css';
import React from 'react';
import Shop from './shop';
import About from './About';
import Nav from './Nav';
import Item from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/shop' exact component={Shop} />
          <Route path='/shop/:code' component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
  


export default App;
