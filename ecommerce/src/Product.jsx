import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Product = function (props) {
  let navigate = useNavigate();
  return (
    <div className="col-sm-6 col-md-6 col-lg-6">
      <div className="card m-2">
        <div className="card-body">
          <div className="d-flex justify-content-between border-bottom">
            <div>
              <span className="badge bg-success p-2 m-1">
                #{props.Product.id}
              </span>
              <span>In stock: {props.Product.stock}</span>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="stocking_text mb-0">
                Total Price:
                <span className="badge bg-success p-2 m-1">
                  ${props.Product.totalPrice}
                </span>
              </h5>
              <h5 className="p-1">
                <button
                  className="no-border"
                  onClick={() => {
                    props.onDelete(props.Product);
                  }}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </h5>
            </div>
          </div>

          <h5 className="pt-5 mt-2">{props.Product.productName}</h5>
          <div>${props.Product.price}</div>
        </div>
        <div className="card-footer">
          <div className="float-start">
            <span className="badge bg-success m-1">
              {props.Product.quantity}
            </span>
            <div className="btn-group">
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  props.onIncrement(props.Product);
                }}>
                +
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  props.onDecrement(props.Product);
                }}>
                -
              </button>
            </div>
          </div>

          <div className="float-end">
            <button
              onClick={() => {
                navigate("/Login");
              }}
              className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
