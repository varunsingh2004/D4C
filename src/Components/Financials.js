import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const Financials = ({ stockSymbol }) => {
  const [financialData, setFinancialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState('revenue');

  useEffect(() => {
    const fetchFinancialData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/income-statement/${stockSymbol}?limit=5&apikey=${process.env.REACT_APP_FINMODEL_API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFinancialData(data.reverse());
      } catch (error) {
        console.error('Error fetching financial data:', error);
        setError('Failed to load financial data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFinancialData();
  }, [stockSymbol]);

  const formatValue = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      compactDisplay: 'short'
    }).format(value);
  };

  const calculateGrowth = (data, key) => {
    if (data.length < 2) return 'N/A';
    const latestValue = data[data.length - 1][key];
    const previousValue = data[data.length - 2][key];
    const growthRate = ((latestValue - previousValue) / previousValue) * 100;
    return growthRate.toFixed(2) + '%';
  };

  const renderChart = (dataKey) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={financialData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={formatValue} />
        <Tooltip formatter={(value) => formatValue(value)} />
        <Legend />
        <Bar dataKey={dataKey} fill="#007bff" name={dataKey === 'revenue' ? 'Revenue' : 'Net Income'} />
      </BarChart>
    </ResponsiveContainer>
  );

  if (isLoading) {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-body text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading financial data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-body text-center">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">{`${stockSymbol} Financial Dashboard`}</h2>
          <p className="card-text text-muted">Annual revenue and net income over the past 5 years</p>
        </div>
        <div className="card-body">
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button 
                className={`nav-link ${view === 'revenue' ? 'active' : ''}`} 
                onClick={() => setView('revenue')}
              >
                Revenue
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${view === 'netIncome' ? 'active' : ''}`} 
                onClick={() => setView('netIncome')}
              >
                Net Income
              </button>
            </li>
          </ul>
          
          <div className="tab-content">
            <div className={`tab-pane fade ${view === 'revenue' ? 'show active' : ''}`}>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Revenue Overview</h5>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-currency-dollar text-success me-2"></i>
                        <span className="text-muted me-2">Latest Revenue:</span>
                        <strong>{formatValue(financialData[financialData.length - 1]?.revenue)}</strong>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-graph-up text-primary me-2"></i>
                        <span className="text-muted me-2">YoY Growth:</span>
                        <strong>{calculateGrowth(financialData, 'revenue')}</strong>
                      </div>
                    </div>
                  </div>
                  {renderChart('revenue')}
                </div>
              </div>
            </div>
            
            <div className={`tab-pane fade ${view === 'netIncome' ? 'show active' : ''}`}>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Net Income Overview</h5>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-currency-dollar text-success me-2"></i>
                        <span className="text-muted me-2">Latest Net Income:</span>
                        <strong>{formatValue(financialData[financialData.length - 1]?.netIncome)}</strong>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-graph-up text-primary me-2"></i>
                        <span className="text-muted me-2">YoY Growth:</span>
                        <strong>{calculateGrowth(financialData, 'netIncome')}</strong>
                      </div>
                    </div>
                  </div>
                  {renderChart('netIncome')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;