import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      listCart: [],
    };
  }

  handleButton = (list) => {
    const { listCart } = this.state;
    this.setState((prevState) => ({
      listCart: [...prevState.listCart, list],
    }), () => this.saveCartItems(listCart));
  }

  saveCartItems = (listCart) => {
    localStorage.setItem('list', JSON.stringify(listCart));
  };

  render() {
    const { searchList } = this.props;
    const { listCart } = this.state;
    console.log(listCart);
    return (
      <div>
        { searchList.map((list) => (
          <div key={ list.id } data-testid="product">
            <Link
              to={ `/card/${list.id}` }
              data-testid="product-detail-link"
            >
              <p>{list.title}</p>
              <img src={ list.thumbnail } alt={ list.title } />
              <p>{ `R$ ${list.price}`}</p>
            </Link>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => this.handleButton(list) }
              // onChange={ listCart }
              value={ listCart }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

Card.propTypes = {
  searchList: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};
// xd
