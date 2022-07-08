import React from 'react';
import { getCategories, getProductsFromCategory } from '../services/api';
import Card from './Card';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryApi: [],
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
      categoryApi,
    });
  }

  render() {
    const { categories, categoryApi } = this.state;
    console.log(categoryApi);
    return (
      <div>
        <p>Categorias</p>
        <ul>
          { categories.map((categoria) => (
            <button
              key={ categoria.id }
              type="button"
              data-testid="category"
              onClick={ () => this.apiGetCategory(categoria.id) }
            >
              { categoria.name }
            </button>
          ))}
        </ul>
        <div>
          <Card
            searchList={ categoryApi }
          />
        </div>
      </div>
    );
  }
}

export default CategoriesList;
