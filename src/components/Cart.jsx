import React from 'react';
import Cartbutton from './Cartbutton';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <Cartbutton />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Cart;
