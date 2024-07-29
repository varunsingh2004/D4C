import React from 'react';
import { Card } from 'react-bootstrap';

function StockData({ name, symbol, price, description }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name} ({symbol})</Card.Title>
        <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StockData;
