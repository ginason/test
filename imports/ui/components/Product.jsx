// Framework
import React, { PureComponent } from "react";
import { Link, Route } from "react-router-dom";

// Components
import Button from "../components/Button.jsx";

class Product extends PureComponent {
  constructor() {
    super();
    this.state = {
      productAmount: 0
    };
    this.handleQuantity = this.handleQuantity.bind(this);
  }
  // handleBuyProduct = () =>
  //   this.props.history.push("/cart?id=" + this.props.productId);
  handleQuantity(e) {
    if (e.target.value > this.props.quantity) {
      alert("product Quantity is less than your select");
      this.setState({
        productAmount: 0
      });
    } else {
      this.setState({
        productAmount: e.target.value
      });
    }
  }
  render() {
    const {
      name = "Product",
      quantity,
      image,
      brand,
      color,
      description,
      price,
      size
    } = this.props;

    const info = [
      { label: "Brand", value: brand },
      { label: "Name", value: name },
      { label: "Description", value: description },
      { label: "Color", value: color },
      { label: "Size", value: size },
      { label: "quantity", value: quantity },
      { label: "Price", value: price }
    ];
    let quantityOption = [...Array(10)].map((key, index) => {
      return (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      );
    });
    return (
      <div className="product">
        <img alt={name} src={image} />
        <div className="details">
          <div className="info">
            {info.map(({ label, value }) =>
              <div className="info-row" key={`${name}-${label}-${value}`}>
                <div className="label">
                  {label}:
                </div>
                <div className="value">
                  {value}
                </div>
              </div>
            )}
          </div>
          {/*<Button onClick={() => this.handleBuyProduct(this)}>*/}
          {/*Buy {name}*/}
          {/*</Button>*/}
          <select
            value={this.state.productAmount}
            onChange={e => this.handleQuantity(e)}
          >
            {quantityOption}
          </select>
          <Link to={"/cart?id=" + this.props.productId}>
            Buy {name}
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
