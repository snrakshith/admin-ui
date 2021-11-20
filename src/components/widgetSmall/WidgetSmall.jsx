import { Visibility } from "@material-ui/icons";
import "./widgetSmall.css";

const WidgetSmall = () => {
  return (
    <div className="widgetsm">
      <span className="widgetTitle">New Join Members</span>
      <ul className="widgetList">
        <li className="widgetListItem">
          <img
            className="widgetAvatar"
            src="https://v4.mui.com/static/images/avatar/1.jpg"
            alt=""
          />
          <div className="widgetItemContent">
            <span className="widgetName">Anna Keller</span>
            <span className="widgetWork">Software Engineer</span>
          </div>

          <button className="widgetbtn">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            className="widgetAvatar"
            src="https://v4.mui.com/static/images/avatar/1.jpg"
            alt=""
          />
          <div className="widgetItemContent">
            <span className="widgetName">Anna Keller</span>
            <span className="widgetWork">Software Engineer</span>
          </div>

          <button className="widgetbtn">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            className="widgetAvatar"
            src="https://v4.mui.com/static/images/avatar/1.jpg"
            alt=""
          />
          <div className="widgetItemContent">
            <span className="widgetName">Anna Keller</span>
            <span className="widgetWork">Software Engineer</span>
          </div>

          <button className="widgetbtn">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img
            className="widgetAvatar"
            src="https://v4.mui.com/static/images/avatar/1.jpg"
            alt=""
          />
          <div className="widgetItemContent">
            <span className="widgetName">Anna Keller</span>
            <span className="widgetWork">Software Engineer</span>
          </div>

          <button className="widgetbtn">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
