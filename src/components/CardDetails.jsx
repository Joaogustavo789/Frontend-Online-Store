import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromProduct } from '../services/api';

class CardDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
      listCart: [],
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  // componentDidUpdate() {
  //   this.setState({ listCart: JSON.parse(localStorage.getItem('list')) });
  // }

  componentDidUpdate() {
    this.saveToCart();
  }

  getDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const results = await getProductsFromProduct(id);
    this.setState({
      details: results,
    });
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
      listCart: [...prevState.listCart, list],
    }));
  }
  // saveListCart = (list) => {
  //   this.setState({
  //     listCart: list,
  //   });
  // }

  // handleButton = (list) => {
  //   const { listCart } = this.state;
  //   // this.setState({ listCart: JSON.parse(localStorage.getItem('list')) });
  //   this.saveListCart(list);
  //   localStorage.setItem('list', JSON.stringify(listCart));
  // }

  render() {
    const { details } = this.state;
    return (
      <div data-testid="product-detail-name">
        <p>{details.title}</p>
        <img src={ details.thumbnail } alt={ details.title } />
        <p>{ `R$ ${details.price}`}</p>
        <p>{ details.available_quantity }</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.handleButton(details) }
        >
          Adicionar ao Carrinho
        </button>

      </div>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default CardDetails;
