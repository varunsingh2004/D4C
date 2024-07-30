import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

function DonutSentimentChart({ sentimentScores, isLoading, colors }) {
  if (isLoading) {
    return <div>Loading chart...</div>;
  }

  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [
          sentimentScores.positive,
          sentimentScores.neutral,
          sentimentScores.negative
        ],
        backgroundColor: colors || ['#28a745', '#ffc107', '#dc3545'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += Math.round(context.parsed * 100) + '%';
            }
            return label;
          }
        }
      }
    },
  };

  return (
    <div style={{ height: '300px', width: '100%' }} aria-label="Sentiment Analysis Donut Chart">
      <Doughnut data={data} options={options} />
    </div>
  );
}

DonutSentimentChart.propTypes = {
  sentimentScores: PropTypes.shape({
    positive: PropTypes.number,
    neutral: PropTypes.number,
    negative: PropTypes.number
  }).isRequired,
  isLoading: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string)
};

DonutSentimentChart.defaultProps = {
  isLoading: false,
  colors: ['#28a745', '#ffc107', '#dc3545']
};

export default DonutSentimentChart;