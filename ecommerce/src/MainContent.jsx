import React, { Component } from "react";
export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Ryan", phone: "123-345", address: { city: "Berlin" } },
      { id: 2, name: "Belin", phone: "786-345", address: { city: "New York" } },
      { id: 3, name: "Cylax", phone: "193-385", address: { city: "Africa" } },
      { id: 1, name: "Roland", phone: "", address: { city: "Monarkry" } },
      {
        id: 2,
        name: "Edet",
        phone: "786-345",
        address: { city: "New Jersey" },
      },
      { id: 3, name: "Adam", phone: null, address: { city: "Nigeria" } },
      { id: 1, name: "Lukman", phone: 0, address: { city: "Afganistan" } },
      { id: 2, name: "Ashrof", phone: "777-345", address: { city: "Guinea" } },
      { id: 3, name: "Kaka", phone: undefined, address: { city: "Ghana" } },
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
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClicked}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {/* dynamic rendering */}
            {this.state.customers.map(customer => {
              return (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>
                    {/*conditional rendering*/}
                    {customer.phone ? (
                      customer.phone
                    ) : (
                      <p className="bg-warning p-2 text-center">No Phone</p>
                    )}
                  </td>
                  <td>{customer.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
