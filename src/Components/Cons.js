import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function Cons({ cons }) {
  return (
    <Card className="mb-4" border="danger">
      <Card.Body>
        <Card.Title as="h2">Cons</Card.Title>
        {cons.length > 0 ? (
          <ul aria-label="List of cons">
            {cons.map((con, index) => (
              <li key={`con-${index}`} className="text-danger">{con}</li>
            ))}
          </ul>
        ) : (
          <p>No cons to display.</p>
        )}
      </Card.Body>
    </Card>
  );
}

Cons.propTypes = {
  cons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Cons.defaultProps = {
  cons: [],
};

export default Cons;