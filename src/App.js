import React from 'react';
import { Switch , Route } from 'react-router-dom';

import './App.css';
import './pages/homepage/homepage.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      {/* Switch - The moment it finds a mtached url 
      - it won't look further - if we remove exact,it will just match the first component that matches the route */}
      <Header/>
      <Switch>
        <Route exact  path = '/' component = {HomePage} />
        <Route exact path = '/shop' component = {ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
