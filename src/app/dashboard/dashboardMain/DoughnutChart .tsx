import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    PointElement
  );


const DoughnutChart = ({overTime}) => {
  
    const data = {
      labels: Object.keys(overTime),
      datasets: [
        {
          label: 'Percentage',
          data:  Object.values(overTime), // Example data
          backgroundColor: [
            '#0063ff',
            '#00b5ad',
            '#ff9f40',
            '#f4b400',
            '#4285f4',
            '#db4437',
          ],
          borderColor: '#ffffff', // White border color
          borderWidth: 3,
          hoverOffset: 10, // Increase size on hover
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
        //   position: 'top', // Legend at the top
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              const label = tooltipItem.label || '';
              const value = tooltipItem.raw;
              const percentage = value + '%';
              return `${label}: ${percentage}`;
            },
          },
        },
      },
    };
  
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto',height:"300px" }}>
        <Doughnut data={data} options={options} />
      </div>
    );
  };
  
  export default DoughnutChart;