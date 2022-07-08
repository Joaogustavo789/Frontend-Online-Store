import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { searchList } = this.props;
    return (
      <div>
        { searchList.map((list) => (
          <div key={ list.id } data-testid="product">
            <p>{list.title}</p>
            <img src={ list.thumbnail } alt={ list.title } />
            <p>{ `R$ ${list.price}`}</p>
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
