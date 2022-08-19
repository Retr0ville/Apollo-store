import React from "react";

type PropTypes = {
  product: {
    id: number,
    name: string,
    price: string,
    image: string
  }
};

class ProductItem extends React.Component<PropTypes> {
  constructor(props: PropTypes) {
      super(props);
  }

  render() {
      return (
          <div>
            <div>
              <img src={this.props.product.image} alt={this.props.product.name} />
            </div>
            <div>{this.props.product.name}</div>
            <div>{this.props.product.price}</div>
          </div>
      );
  }
}

export default ProductItem;