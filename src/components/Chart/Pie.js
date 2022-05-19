import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Male", "Female", "Children"],
    datasets: [
      {
        label: "Visitors Chart",
        data: [20, 15, 25],
        backgroundColor: ["green", "yellow", "blue"],
        borderColor: ["green", "yellow", "blue"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
        },
      },
      title: {
        display: true,
        text: "Visitors Chart",
      },
    },
  };

  return (
    <>
      <Pie data={data} options={options} />
    </>
  );
};

export default PieChart;
