import React from 'react';
import { Card } from 'react-bootstrap';

function StockData({ name, symbol, price, keyPoints }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{name} ({symbol})</Card.Title>
        <h5>Price: ${price}</h5>
        <h6>Key Points:</h6>
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default StockData;
