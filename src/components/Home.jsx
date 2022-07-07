import React from 'react';
import CategoriesList from './CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label
          htmlFor="home"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            id="home"
            type="text"
            name="home"
          />
        </label>
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
