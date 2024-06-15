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
const BarChart = () => {
  const data = {
    labels: ['Telecom', 'Business Services', 'Consumer Goods', 'EdTech', 'Food and Agriculture', 'Enterprise Applications'],
    datasets: [
      {
        label: 'Investment',
        data: [60, 80, 90, 50, 85, 70], // Example data
        backgroundColor: '#f09643',
        borderRadius: 20, // Rounded corners
       
        borderWidth: 1,
      },
      {
        label: 'Returns',
        data: [70, 110, 120, 70, 110, 85], // Example data
        backgroundColor: '#1d63dc',
        borderRadius: 20, // Rounded corners
        
        borderWidth: 1,
      },
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