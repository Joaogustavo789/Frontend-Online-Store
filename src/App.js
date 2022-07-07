import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
// import './App.css';

class App extends React.Component {
  render() {
    getProductsFromCategoryAndQuery();
    getCategories();
    return (
      <p>pagina rodando</p>
    );
  }
}

export default App;
