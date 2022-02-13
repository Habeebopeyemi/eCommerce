import React, { Component } from "react";
export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Ryan",
        phone: "123-345",
        address: { city: "Berlin" },
        photo: "https://picsum.photos/id/1001/60",
      },
      {
        id: 2,
        name: "Belin",
        phone: "786-345",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1005/60",
      },
      {
        id: 3,
        name: "Cylax",
        phone: "193-385",
        address: { city: "Africa" },
        photo: "https://picsum.photos/id/1006/60",
      },
      {
        id: 4,
        name: "Roland",
        phone: "",
        address: { city: "Monarkry" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Edet",
        phone: "786-345",
        address: { city: "New Jersey" },
        photo: "https://picsum.photos/id/1008/60",
      },
      {
        id: 6,
        name: "Adam",
        phone: null,
        address: { city: "Nigeria" },
        photo: "https://picsum.photos/id/1009/60",
      },
      {
        id: 7,
        name: "Lukman",
        phone: 0,
        address: { city: "Afganistan" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 8,
        name: "Ashrof",
        phone: "777-345",
        address: { city: "Guinea" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 9,
        name: "Kaka",
        phone: undefined,
        address: { city: "Ghana" },
        photo: "https://picsum.photos/id/1021/60",
      },
    ],
  };

  // Methods

  // execute when the user clicks refresh button
  onRefreshClicked = () => {
    this.setState({
      customersCount: 0,
    });
  };
  // or use this
  //   onRefreshClicked = function () {
  //     this.setState({
  //       customersCount: 0,
  //     });
  //   }.bind(this);

  // execute when counter is clicked
  onCounterClicked = () => {
    let newState = { ...this.state };
    this.setState({
      customersCount: newState.customersCount + 1,
    });
  };
  // method to check if phone exist
  getPhoneToRender = phone => {
    if (phone) return phone;
    else {
      return <p className="bg-warning p-2 text-center">No Phone</p>;
    }
  };
  // execute when change button is clicked
  onChangePhotoClick = (customer, index) => {
    // get existing customer
    let newCustomers = [...this.state.customers];
    newCustomers[index].photo = `https://picsum.photos/id/102${Math.floor(
      Math.random() * 9
    )}/60`;

    // update "customers" array in the state
    this.setState({
      customers: newCustomers,
    });
  };
  // method to get customer row for the table body
  getCustomersRow = () => {
    return this.state.customers.map((customer, index) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img src={customer.photo} alt="photo"/>
            <div>
              {/* <button
                className="btn btn-sm btn-secondary mt-1"
                onClick={this.onChangePhotoClick.bind(this, customer, index)}>
                Change photo
              </button> */}
              <button
                className="btn btn-sm btn-secondary mt-1"
                onClick={() => {
                  this.onChangePhotoClick(customer, index);
                }}>
                Change photo
              </button>
            </div>
          </td>
          <td>{customer.name}</td>
          <td>
            {/*conditional rendering*/}
            {this.getPhoneToRender(customer.phone)}
          </td>
          <td>{customer.address.city}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h4 className=" m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info m-1" onClick={this.onRefreshClicked}>
            Refresh
          </button>
          <button className="btn btn-info m-1" onClick={this.onCounterClicked}>
            Counter
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer Image</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {/* dynamic rendering */}
            {this.getCustomersRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
