import { Link } from "react-router-dom";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User </h1>
      <form className="newFormUser">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="number" placeholder="+123 456 78" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserRadio">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* <Link to="/newUser"></Link> */}
        <button className="newUserBtn">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
