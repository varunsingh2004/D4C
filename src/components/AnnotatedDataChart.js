import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function AnnotatedDataChart() {
  const data = {
    labels: ['Sentence', 'Computer', 'Document'],
    datasets: [
      {
        label: 'Sentiment',
        data: [30, 10, 10],
        backgroundColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Emotion',
        data: [20, 20, 30],
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
      <h3>Annotated Data</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default AnnotatedDataChart;
