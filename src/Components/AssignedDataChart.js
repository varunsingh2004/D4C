import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function AssignedDataChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sentence',
        data: [33, 25, 35, 51, 54, 76, 65],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Paragraph',
        data: [33, 25, 35, 51, 54, 76, 65],
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
      {
        label: 'Document',
        data: [33, 25, 35, 51, 54, 76, 65],
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
      <h3>Assigned Data</h3>
      <Line data={data} options={options} />
    </div>
  );
}

export default AssignedDataChart;
