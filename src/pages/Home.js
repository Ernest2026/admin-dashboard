import React from "react";
import HomeCard from "../components/Card/Home";
import { FaCartPlus, FaChartPie, FaUserPlus } from "react-icons/fa";
import LineChart from "../assets/Chart/Line";
import DoughnutChart from "../assets/Chart/Doughnut";
import PieChart from "../assets/Chart/Pie";
import BarChart from "../assets/Chart/Bar";

const Home = () => {
  return (
    <div>
      <h4>
        <strong>Dashboard</strong>
      </h4>
      <hr />
      <div className="row g-0 justify-content-between">
        <HomeCard
          text="users"
          count="120"
          color="green"
          component={<FaUserPlus />}
        />
        <HomeCard
          text="new orders"
          count="120"
          color="blue"
          component={<FaChartPie />}
        />
        <HomeCard
          text="visitors"
          count="120"
          color="yellow"
          component={<FaUserPlus />}
        />
        <HomeCard
          text="earnings"
          count="120"
          color="red"
          component={<FaCartPlus />}
        />
      </div>
      <div className="row g-0 justify-content-between">
        <div className="col-lg-8 col-md-9 col-12 border home-chart-a overflow-scroll p-3 bg-light rounded-1">
          <div className="" style={{ minWidth: "500px" }}>
            <LineChart />
          </div>
        </div>
        <div className="d-flex align-items-center col-lg-4 col-md-3 col-12 border home-chart-b mt-md-0 mt-4 bg-light rounded-1">
          <div className="pie mx-auto">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <div className="row g-0 justify-content-between flex-column-reverse flex-md-row">
        <div className="d-flex align-items-center col-lg-4 col-md-3 col-12 border home-chart-b mt-4 p-3 bg-light rounded-1">
          <div className="pie mx-auto">
            <PieChart />
          </div>
        </div>
        <div className="col-lg-8 col-md-9 col-12 border home-chart-a overflow-scroll mt-4 bg-light rounded-1">
          <div className="" style={{ minWidth: "500px" }}>
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
