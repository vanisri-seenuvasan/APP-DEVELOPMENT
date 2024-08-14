import React from 'react';
import '../styles/Graph.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const Graph = () => {
  const data = {
    labels: ['REA Group', 'Rightmove', 'Immobilien Scout24', 'Axel Springer', 'Domain', 'Zoopla', 'Trade Me Property', 'Hemnet', 'Zillow Group'],
    datasets: [
      {
        type: 'bar',
        label: 'Revenues',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [500, 300, 200, 250, 200, 100, 50, 20, 600],
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
      {
        type: 'bar',
        label: 'EBITDA',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [100, 80, 70, 60, 50, 30, 10, 5, 150],
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        type: 'line',
        label: 'Profit Margin (%)',
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        data: [20, 25, 35, 30, 40, 15, 10, 5, 70],
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Last Full Year Financial Comparison',
        font: {
          size: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
        footerFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="background-container"></div>
      <div className="graph-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
