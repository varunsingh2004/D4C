import React from 'react';
import { Card } from 'react-bootstrap';

function StockData({ name, symbol, price, keyPoints }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name} ({symbol})</Card.Title>
        <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
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
