import React from "react";
import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";

const Home = () => {
  return (
    <div className="homeContainer">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
    </div>
  );
};

export default Home;
