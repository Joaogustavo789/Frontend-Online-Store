import React from 'react';
import CategoriesList from './CategoriesList';
import { getProductsFromQuery } from '../services/api';
// import Card from './Card';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      searchList: { results: [] },
    };
  }

  inputOnChange = ({ target }) => {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  handleSearch = async () => {
    const { query } = this.state;
    const results = await getProductsFromQuery(query);
    this.setState({ searchList: results });
  }

  render() {
    const { query, searchList } = this.state;
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
            value={ query }
            data-testid="query-input"
            onChange={ this.inputOnChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          Pesquisar
        </button>
        <CategoriesList />
        <div>
          {searchList.results.map((list) => (
            // <Card key={ list.id } product={ list } />
            <div key={ list.id } data-testid="product">
              <p>{list.title}</p>
              <img src={ list.thumbnail } alt={ list.title } />
              <p>{ `R$ ${list.price}`}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
