// Framework
import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

// Components
import { Alert, Row, Col } from "reactstrap";
import Page from "../components/Page.jsx";
import Product from "../components/Product";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchants: [],
      error: null
    };
  }

  componentWillMount() {
    Meteor.call("merchants.getMerchants", (error, response) => {
      if (error) {
        this.setState(() => ({ error: error }));
      } else {
        this.setState(() => ({ merchants: response }));
        console.log(response);
      }
    });
  }

  goBack = () => this.props.history.push("/");

  render() {
    const { merchants, error } = this.state;

    const getProductsFromMerchant = ({ products, brands }) =>
      products.map(({ belongsToBrand, ...product }) => ({
        ...product,
        brand: brands[belongsToBrand]
      }));

    const products = merchants.reduce(
      (acc, merchant) => [...acc, ...getProductsFromMerchant(merchant)],
      []
    );
    console.log(products);
    return (
      <Page pageTitle="shop" history goBack={this.goBack}>
        <div className="shop-page">
          {products.map(({ id, ...product }) =>
            <Product {...product} history productId={id} key={id} />
          )}
        </div>
      </Page>
    );
  }
}

export default Shop;
