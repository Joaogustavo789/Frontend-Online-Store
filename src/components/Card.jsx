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
    // if (!listCart.length) {
    //   localStorage.setItem('list', '[]');
    // } else {
    localStorage.setItem('list', JSON.stringify(listCart));
    // }
  };

  saveToCart = () => {
    const { listCart } = this.state;
    if (listCart.length !== 0) {
      this.saveCartItems(listCart);
    }
  }

  handleButton = () => {
    const { listCart } = this.state;
    this.setState((prevState) => ({
      listCart: [...prevState.listCart, listCart],
    }), () => this.saveToCart());
  }

  render() {
    const { searchList } = this.props;
    console.log(searchList);
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
              onClick={ this.handleButton }
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
