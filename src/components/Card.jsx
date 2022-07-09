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

  componentDidUpdate() {
    this.saveToCart();
  }

  saveCartItems = (listCart) => {
    localStorage.setItem('list', JSON.stringify(listCart));
  };

  saveToCart = () => {
    const { listCart } = this.state;
    if (listCart.length !== 0) {
      this.saveCartItems(listCart);
    }
  }

  handleButton = (list) => {
    this.setState((prevState) => ({
      listCart: [list, ...prevState.listCart],
    }), () => this.saveToCart());
  }

  render() {
    const { searchList } = this.props;
    const { listCart } = this.state;
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
