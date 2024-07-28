import React from 'react';
import { Card } from 'react-bootstrap';

function Cons({ cons }) {
  return (
    <Card className="mb-4" border="danger">
      <Card.Body>
        <Card.Title>Cons</Card.Title>
        <ul>
          {cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default Cons;
