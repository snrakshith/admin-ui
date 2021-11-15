import React from "react";
import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";

const Home = () => {
  return (
    <div className="homeContainer">
      <FeaturedInfo />
      <Chart
        className="chart"
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
