import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoriesList from './CategoriesList';
import {
  getCategories,
  getProductsFromQuery,
  getProductsFromCategory } from '../services/api';
import Card from './Card';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      searchList: [],
      categories: [],
    };
  }

  componentDidMount() {
    this.categoriesAll();
  }

  categoriesAll = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  apiGetCategory = async (categoriaId) => {
    const categoryApi = await getProductsFromCategory(categoriaId);
    this.setState({
      searchList: categoryApi.results,
    });
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
    this.setState({ searchList: results.results });
  }

  render() {
    const { query, searchList, categories } = this.state;
    const { addToCart } = this.props;
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
        <Link to="/cart">
          <button type="button">
            carrinho de compras
          </button>
        </Link>
        <CategoriesList
          apiGetCategory={ this.apiGetCategory }
          categories={ categories }
        />
        <div>
          { searchList.length ? (
            <div>
              { searchList.map((list) => (
                <div key={ list.id } data-testid="product">
                  <Card
                    id={ list.id }
                    title={ list.title }
                    thumbnail={ list.thumbnail }
                    price={ list.price }
                  />
                  <button
                    data-testid="product-add-to-cart"
                    type="button"
                    onClick={ () => addToCart(list) }
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              ))}
            </div>
          ) : null }
        </div>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
