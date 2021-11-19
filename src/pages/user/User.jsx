import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userBtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              src="https://v4.mui.com/static/images/avatar/1.jpg"
              alt=""
            />
            <div className="userShowTitle">
              <span className="userShowUsername">Anna Becker </span>
              <span className="userShowDetailPosition">Software Engineer </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="details">Account Details</span>
            <div className="infoContainer">
              <PermIdentity className="userInfoIcon" />
              <span className="userInfo">annabeck99</span>
            </div>
            <div className="infoContainer">
              <CalendarToday className="userInfoIcon" />
              <span className="userInfo">10.12.1999</span>
            </div>
            <span className="details">Contact Details</span>
            <div className="infoContainer">
              <PhoneAndroid className="userInfoIcon" />
              <span className="userInfo">+1 123 456 67</span>
            </div>
            <div className="infoContainer">
              <MailOutline className="userInfoIcon" />
              <span className="userInfo">annabeck99@gmail.com</span>
            </div>
            <div className="infoContainer">
              <LocationSearching className="userInfoIcon" />
              <span className="userInfo">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="updateTitle">Edit</span>
          <form className="form">
            <div className="formLeft">
              <div className="updateForm">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name=""
                  placeholder="annabeck99"
                  className="updateInput"
                />
              </div>
              <div className="updateForm">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name=""
                  placeholder="Anna Becker"
                  className="updateInput"
                />
              </div>
              <div className="updateForm">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name=""
                  placeholder="annabeck99@gmail.com"
                  className="updateInput"
                />
              </div>
              <div className="updateForm">
                <label htmlFor="">Phone</label>
                <input
                  type="number"
                  name=""
                  placeholder="+1 123 456 67"
                  className="updateInput"
                />
              </div>
              <div className="updateForm">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name=""
                  placeholder="New York | USA"
                  className="updateInput"
                />
              </div>
            </div>
            <div className="formRight">
              <div className="formUpload">
                <img
                  className="uploadImg"
                  src="https://v4.mui.com/static/images/avatar/1.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="uploadIcon" />
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="updateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
