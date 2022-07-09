import React from 'react';
import EmptyCart from './EmptyCart';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <EmptyCart />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Cart;
