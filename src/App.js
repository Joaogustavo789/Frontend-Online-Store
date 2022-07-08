import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './components/Home';
import Cart from './components/Cart';
import Cartbutton from './components/Cartbutton';

class App extends React.Component {
  render() {
    getProductsFromCategoryAndQuery();
    getCategories();
    return (
      <section>
        <BrowserRouter>
          <Cartbutton />
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          {/* <Route path="/:id" component={ Category } /> */}
        </BrowserRouter>
      </section>

    );
  }
}

export default App;
