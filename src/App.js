import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './components/Home';

class App extends React.Component {
  render() {
    getProductsFromCategoryAndQuery();
    getCategories();
    return (
      <section>
        <BrowserRouter>
          <Route path="/" component={ Home } />
        </BrowserRouter>
      </section>

    );
  }
}

export default App;
