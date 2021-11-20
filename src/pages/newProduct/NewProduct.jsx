import { Link } from "react-router-dom";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product </h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label htmlFor=""> Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <select className="newProductSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* <Link to="/newProduct"></Link> */}
        <button className="newProductBtn">Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
