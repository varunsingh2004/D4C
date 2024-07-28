import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function AvailableDataChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sentiment',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Paragraph',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
      {
        label: 'Document',
        data: [18, 48, 77, 9, 100, 27, 40],
        borderColor: 'rgba(255,159,64,1)',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Available Data</h3>
      <Line data={data} options={options} />
    </div>
  );
}

export default AvailableDataChart;
