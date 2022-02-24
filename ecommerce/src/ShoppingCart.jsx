import React, { Component } from "react";
import Product from "./Product";
// import PageLoading from "./LoadingHttp";
export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      loadingMessage: "",
      loadingImage: "../../img/icons8-loading-circle.gif",
      status: "",
    };
  }

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
    return quantity * price;
  };
  // execute when the delete icon is clicked
  deleteHandler = product => {
    //   cloning the products contained in the state
    let newProductList = [...this.state.products];
    //   getting the selected product index
    let deleteInddex = newProductList.indexOf(product);
    //   confirming delete action;
    if (window.confirm("Did you really wish delete this product?")) {
      //   deleting the selected product
      newProductList.splice(deleteInddex, 1);
      // Updating the state
      this.setState({
        products: newProductList,
      });
    }
  };
 
  // componentDidMount = setTimeout(async () => {
  //   let response = await fetch("http://localhost:5000/products", {
  //     method: "GET",
  //   });
  //   let loadingStatus = response.status;
  //   if (loadingStatus === 200) {
  //     this.setState({
  //       status: loadingStatus,
  //     });
  //   }
  //   let newProducts = await response.json();
  //   this.setState({
  //     products: newProducts,
  //   });
  // }, 5000);
  // componentDidMount() {
  //   // making http request using fetch API
  //   let asyncRequest = fetch("http://localhost:5000/products", {
  //     method: "GET",
  //   });
  //   asyncRequest.then(response => {
  //     let loadingStatus = response.status;
  //     if (loadingStatus === 200) {
  //       this.setState({
  //         status: loadingStatus,
  //       });
  //     }
  //     // converting response from json to js object which return new promise
  //     let newResponse = response.json()
  //     // consuming the new response
  //     newResponse.then(newproducts => {
  //       this.setState({
  //         products:newproducts
  //       })
  //     })
  //   });
  // }
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
                onDecrement={this.decrementHandler}
                onDelete={this.deleteHandler}
                ></Product>
            );
          })}
        </div>
      </div>
    );
  }
}
