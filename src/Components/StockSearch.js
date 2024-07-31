import React, { useState, useCallback } from 'react';
import { Form, FormControl, Button, Alert, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { fetchStockData} from '../api';
import analyzeSentiment from '../sentimentService';

function StockSearch({ onSearch }) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    // debouncedFetchSuggestions(input);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter a stock symbol or name');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const stockData = await fetchStockData(query);
      const sentimentScores = await analyzeSentiment(stockData.description);
      
      const sentimentData = {
        name: stockData.companyName,
        symbol: stockData.symbol,
        price: stockData.price,
        description: stockData.description,
        sentiment: {
          pros: sentimentScores.positive > sentimentScores.negative 
            ? [stockData.description] 
            : [],
          cons: sentimentScores.negative > sentimentScores.positive 
            ? [stockData.description] 
            : []
        },
        sentimentScores
      };
      
      onSearch(sentimentData);
      setRecentSearches(prev => [query, ...prev.slice(0, 4)]);
      setQuery('');
      setSuggestions([]);
    } catch (error) {
      console.error('Error fetching stock data or analyzing sentiment', error);
      setError('Failed to fetch stock data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <Form.Group className="mb-3">
        <FormControl
          type="search"
          placeholder="Enter stock symbol (e.g., AAPL)"
          aria-label="Search for a stock"
          value={query}
          onChange={handleInputChange}
          disabled={isLoading}
          list="stock-suggestions"
        />
        {/* <datalist id="stock-suggestions">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist> */}
        <Button 
          variant="outline-primary" 
          type="submit" 
          className="mt-2 w-100"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
      </Form.Group>
      {error && <Alert variant="danger">{error}</Alert>}
      {/* {recentSearches.length > 0 && (
        <div className="mt-3">
          <h6>Recent Searches</h6>
          <ListGroup>
            {recentSearches.map((search, index) => (
              <ListGroup.Item key={index} action onClick={() => setQuery(search)}>
                {search}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )} */}
    </Form>
  );
}

StockSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default StockSearch;