import React from 'react';
import { Card } from 'react-bootstrap';

function DataCard({ title, value }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DataCard;
