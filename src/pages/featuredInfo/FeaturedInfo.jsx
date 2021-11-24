import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./FeaturedInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredContainer">
          <span className="featuredMoney">$2,454</span>
          <span className="featuredRate">
            -11.4
            <ArrowDownward className="symbol" />
          </span>
        </div>
        <span className="subTitle">Compared to last month</span>
      </div>
      {/* Sales */}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredContainer">
          <span className="featuredMoney">$4,454</span>
          <span className="featuredRate">
            -1.5
            <ArrowDownward className="symbol" />
          </span>
        </div>
        <span className="subTitle">Compared to last month</span>
      </div>
      {/* Cost */}
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredContainer">
          <span className="featuredMoney">$2,023</span>
          <span className="featuredRate">
            +2.1
            <ArrowUpward className="symbol" />
          </span>
        </div>
        <span className="subTitle">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
