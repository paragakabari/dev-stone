import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const BarChart = ({sector}) => {
  
  const data = {
    labels: Object.keys(sector),
    datasets: [
      {
        label: 'Investment',
        data: Object.values(sector), // Example data
        backgroundColor: '#f09643',
        borderRadius: 20, // Rounded corners
       
        borderWidth: 1,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
      x:{
        beginAtZero:true
      }
    },
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto',height:"350px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;