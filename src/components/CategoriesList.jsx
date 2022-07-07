import React from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    const { categories } = this.state;
    return (
      <div>
        <p>Categorias</p>
        <ul>
          { categories.map((categoria) => (
            <button
              type="button"
              data-testid="category"
              key={ categoria.id }
            >
              { categoria.name }
            </button>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
