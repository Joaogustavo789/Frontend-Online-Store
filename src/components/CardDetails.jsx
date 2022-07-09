import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromProduct } from '../services/api';

class CardDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const results = await getProductsFromProduct(id);
    this.setState({
      details: results,
    });
  }

  render() {
    const { details } = this.state;
    console.log(details);
    return (
      <div data-testid="product-detail-name">
        <p>{details.title}</p>
        <img src={ details.thumbnail } alt={ details.title } />
        <p>{ `R$ ${details.price}`}</p>
        <p>{ details.available_quantity }</p>

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
