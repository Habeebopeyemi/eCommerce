import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 1,
        productName: "Macbook",
        price: 8900,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 2,
        productName: "iPhone 6",
        price: 1200,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 3,
        productName: "Sony Camera",
        price: 2100,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 4,
        productName: "LG Television",
        price: 5000,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 5,
        productName: "Hp Elitebook",
        price: 4500,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 6,
        productName: "iPhone 7",
        price: 9600,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 7,
        productName: "Oraimo ear bud",
        price: 1300,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 8,
        productName: "tpLink radio",
        price: 3456,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 9,
        productName: "SMC router",
        price: 2500,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
      {
        id: 10,
        productName: "RJ 45 connector",
        price: 700,
        quantity: 0,
        stock: 10,
        totalPrice: 0,
      },
    ],
  };
  incrementHandler = product => {
    //   clone state products
    let newProducts = [...this.state.products];
    let productIndex = newProducts.indexOf(product);
    //   checking to see customers are not ordering more than available stock
    if (newProducts[productIndex].quantity < newProducts[productIndex].stock) {
      // increment the cloned product
      newProducts[productIndex].quantity++;
    }
    let totalPrice = this.getTotalPrice(
      newProducts[productIndex].quantity,
      newProducts[productIndex].price
    );
    //updating the total price of the goods
    newProducts[productIndex].totalPrice = totalPrice;
    // update the state
    this.setState({
      products: newProducts,
    });
  };
  decrementHandler = product => {
    //   clone state products
    let newProducts = [...this.state.products];
    let productIndex = newProducts.indexOf(product);
    //   checking negativity
    if (newProducts[productIndex].quantity > 0) {
      // increment the cloned product
      newProducts[productIndex].quantity--;
    }
    let totalPrice = this.getTotalPrice(
      newProducts[productIndex].quantity,
      newProducts[productIndex].price
    );
    //updating the total price of the goods
    newProducts[productIndex].totalPrice = totalPrice;
    // update the state
    this.setState({
      products: newProducts,
    });
  };
  // execute when you increase or decrease your unit of purchase
  getTotalPrice = (quantity, price) => {
    // console.log(quantity, price);
    return quantity * price;
  };
  render() {
    return (
      <div>
        <h4 className="container-fluid">Shopping Cart</h4>
        <div className="row">
          {this.state.products.map(product => {
            return (
              <Product
                key={product.id}
                Product={product}
                onIncrement={this.incrementHandler}
                onDecrement={this.decrementHandler}>
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}
