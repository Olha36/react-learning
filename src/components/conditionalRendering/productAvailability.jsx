import { Component } from 'react';
import { FaHome } from 'react-icons/fa';
export default class ProductAvailability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvailable: true,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => {
      return {
        isAvailable: !prevState.isAvailable,
      };
    });
  };
  render() {
    const { isAvailable } = this.state;
    if (isAvailable) {
      return (
        <>
          <FaHome />
          <div className='product-availability'>
            <p>Product is available</p>
            <button onClick={this.handleButtonClick}>Add to cart</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <FaHome />
          <div className='product-availability'>
            <p>Product is unavailable</p>
            <button onClick={this.handleButtonClick}>Notify when the product appears</button>
          </div>
        </>
      );
    }
  }
}

// Build a simple e-commerce product component that displays different messages based on the availability of a product.

// If the product is in stock, show the product details and an "Add to Cart" button.
// If the product is out of stock, show a message like "This product is currently unavailable."
// Add a button to simulate toggling the product's availability.
