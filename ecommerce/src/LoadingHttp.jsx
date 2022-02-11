import React, { Component } from "react";
export default class PageLoading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row mt-3">
        <div className="text-center pt-3 image-container mx-auto">
                <img className="img-fluid" src={ this.props.image}alt="loading GIF" />
        </div>
        <h6 className="text-center p-5">Please wait while page loads</h6>
      </div>
    );
  }
}
