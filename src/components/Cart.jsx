import React from 'react';
import PropTypes from 'prop-types';
import EmptyCart from './EmptyCart';

class Cart extends React.Component {
  render() {
    const { listCart, sumAndSubProducts } = this.props;
    return (
      <div>
        { !listCart.length
          ? (
            <div>
              <EmptyCart />
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </p>
            </div>
          ) : (
            <div>
              {listCart.map((list) => (
                <div key={ `${list.id}` }>
                  <p data-testid="shopping-cart-product-name">{list.title}</p>
                  <img src={ list.thumbnail } alt={ list.title } />
                  <p>{ `R$ ${list.price}`}</p>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    name={ list.id }
                    value="+"
                    onClick={ sumAndSubProducts }
                  >
                    +
                  </button>
                  <p data-testid="shopping-cart-product-quantity">
                    { list.quantity }
                  </p>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    name={ list.id }
                    value="-"
                    onClick={ sumAndSubProducts }
                  >
                    -
                  </button>
                </div>
              ))}
            </div>)}
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  listCart: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  sumAndSubProducts: PropTypes.func.isRequired,
};
