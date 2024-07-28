import React from 'react';
import { Card } from 'react-bootstrap';

function Pros({ pros }) {
  return (
    <Card className="mb-4" border="success">
      <Card.Body>
        <Card.Title>Pros</Card.Title>
        <ul>
          {pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default Pros;
