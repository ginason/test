// Framework
import React, { Component, PureComponent } from "react";
import { withRouter } from "react-router";
import { Meteor } from "meteor/meteor";

class Cart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>my whish list!!</div>;
  }
}
export default Cart;
