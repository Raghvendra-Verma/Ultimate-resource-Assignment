import React from "react";
import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Employee Earnings",
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.4)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [
        5000, 6000, 4500, 8000, 7000, 9000, 6500, 7500, 7000, 8500, 9500, 8500,
      ],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const chartData = () => {
  return (
    <div>
      <div style={{ maxWidth: "350px", margin: "20px auto" }}>
        <h3>Contribution Overtime</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default chartData;
