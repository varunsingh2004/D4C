import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function UnannotatedDataChart() {
  const data = {
    labels: ['Sentence', 'Computer', 'Document'],
    datasets: [
      {
        label: 'Sentiment',
        data: [20, 10, 10],
        backgroundColor: 'rgba(255,159,64,1)',
      },
      {
        label: 'Emotion',
        data: [30, 20, 30],
        backgroundColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Categories',
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
      <h3>Unannotated Data</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default UnannotatedDataChart;
