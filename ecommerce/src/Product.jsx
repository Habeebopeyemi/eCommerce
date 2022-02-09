import React, { Component } from "react";
export default class Product extends Component {
  state = {
    Product: this.props.Product,
  };
  render() {
    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div>
              <div className="float-start">
                <span className="badge bg-success p-2 m-1">
                  #{this.state.Product.id}
                </span>
                <span>In stock: {this.state.Product.stock}</span>
              </div>
              <div className="float-end">
                <h5 className="stocking_text">
                  Total Price:
                  <span className="badge bg-success p-2 m-1">
                    ${this.state.Product.totalPrice}
                  </span>
                </h5>
              </div>
            </div>

            <h5 className="pt-5 mt-4 border-top">
              {this.state.Product.productName}
            </h5>
            <div>${this.state.Product.price}</div>
          </div>
          <div className="card-footer">
            <div className="float-start">
              <span className="badge bg-success m-1">
                {this.state.Product.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.Product);
                  }}>
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.Product);
                  }}>
                  -
                </button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
