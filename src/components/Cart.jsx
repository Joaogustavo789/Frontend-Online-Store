import React from 'react';
// import PropTypes from 'prop-types';
import EmptyCart from './EmptyCart';

class Cart extends React.Component {
  state = {
    listCart: [],
    // empty: true,
  }

  componentDidMount() {
    this.getCartItem();
    // this.validationEmptyCart();
  }

  getCartItem = () => {
    if (!JSON.parse(localStorage.getItem('list'))) {
      this.setState({ listCart: [] });
    } else {
      this.setState({
        listCart: JSON.parse(localStorage.getItem('list')),
      });
    }
  }

  render() {
    const { listCart } = this.state;
    console.log(listCart);
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
              {listCart.map((list, index) => (
                <div key={ `${list.id} ${index}` }>
                  <p data-testid="shopping-cart-product-name">{list.title}</p>
                  <img src={ list.thumbnail } alt={ list.title } />
                  <p>{ `R$ ${list.price}`}</p>
                  <p>{ list.available_quantity }</p>
                  <p data-testid="shopping-cart-product-quantity">
                    {listCart.filter((item) => (item.id === list.id)).length}
                  </p>
                </div>
              ))}
            </div>)}
      </div>
    );
  }
}

export default Cart;

// Cart.propTypes = {
//   listCart: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
