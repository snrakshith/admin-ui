import "./product.css";
import React from "react";
import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <div className="productTop">
        <h1>Product</h1>
        <Link to="/newProduct">
          <button className="createBtn">Create</button>
        </Link>
      </div>
      <div className="productContainer">
        <div className="productContainerLeft">
          <form className="productForm">
            <span className="productName">Product Name</span>
            <div className="productInput">
              <input
                className="labelInput"
                type="text"
                name=""
                id=""
                placeholder="Apple AirPod"
              />
            </div>
            <div className="productInput">
              <label>In Stock</label>
              <select className="productSelect" id="active" name="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productInput">
              <label>Active</label>
              <select className="productSelect" id="active" name="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </form>
        </div>
        <div className="productContainerRight">
          <div className="fileUpload">
            <img
              className="uploadImg"
              src="https://v4.mui.com/static/images/avatar/1.jpg"
              alt=""
            />
            <label htmlFor="file">
              <Publish />
            </label>
            <input className="uploadFile" type="file" id="file" />
          </div>
          <button className="updateBtn">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
