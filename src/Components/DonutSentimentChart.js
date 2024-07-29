import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

function DonutChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    const config = {
      type: 'doughnut',
      data: data,
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="chart-container">
      <h3>Sentiment of Stock</h3>
      <div className="canvas-container">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default DonutChart;
