import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { fetchStockData } from '../api';

function StockSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const stockData = await fetchStockData(query);
      // Simulate sentiment analysis data
      const sentimentData = {
        name: stockData.companyName,
        symbol: stockData.symbol,
        price: stockData.price,
        description: stockData.description,
        sentiment: {
          pros: ["High growth potential", "Strong financials", "Innovative products"],
          cons: ["High valuation", "Market volatility", "Regulatory risks"]
        }
      };
      onSearch(sentimentData);
    } catch (error) {
      console.error('Error fetching sentiment analysis', error);
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Search stock names..."
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
  );
}

export default StockSearch;
