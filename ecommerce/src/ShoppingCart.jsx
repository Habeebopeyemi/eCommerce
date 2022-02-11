import React, { Component } from "react";
import Product from "./Product";
import PageLoading from "./LoadingHttp";
export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
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
  componentDidMount() {
    // making http request using fetch API
    let asyncRequest = fetch("http://localhost:5000/products", {
      method: "GET",
    });
    asyncRequest.then(response => {
      let loadingStatus = response.status;
      if (loadingStatus === 200) {
        this.setState({
          status: loadingStatus,
        });
      }
      // converting response from json to js object which return new promise
      let newResponse = response.json()
      newResponse.then(newproducts => {
        this.setState({
          products:newproducts
        })
      })
    });
  }
  render() {
    if (this.state.status !== 200) {
      return <PageLoading
        image = {this.state.loadingImage}
      />
    } else {
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
                   onDelete={this.deleteHandler}>
                   <button className="btn btn-primary">Buy Now</button>
                 </Product>
               );
             })}
           </div>
         </div>
       );
    }

   
  }
}
