import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <div>
        <Link
          to={ `/card/${id}` }
          data-testid="product-detail-link"
        >
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$ ${price}`}</p>
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
