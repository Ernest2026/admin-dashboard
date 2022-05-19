import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Category 1",
        data: [0, 40, -10, -10, 30, -20, 50, 10],
        borderColor: "hsl(240, 100%, 40%)",
        backgroundColor: "hsl(240, 100%, 50%)",
      },
      {
        label: "Category 2",
        data: [40, -10, 30, 30, -20, 10, -20],
        borderColor: "hsl(120, 100%, 10%)",
        backgroundColor: "hsl(120, 100%, 20%)",
      },
    ],
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
