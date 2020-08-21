import React from 'react';
import { Switch , Route } from 'react-router-dom';

import './App.css';
import './pages/homepage/homepage.component';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
);

function App() {
  return (
    <div>
      {/* Switch - The moment it finds a mtached url 
      - it won't look further - if we remove exact,it will just match the first component that matches the route */}
      <Switch>
        <Route exact  path = '/' component = {HomePage} />
        <Route exact path = '/shop/hats' component = {HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
