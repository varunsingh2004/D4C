import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Pros({ pros, maxInitialDisplay = 5, textColor = 'success' }) {
  const [showAll, setShowAll] = useState(false);

  const displayedPros = showAll ? pros : pros.slice(0, maxInitialDisplay);

  return (
    <Card className="mb-4" border="success">
      <Card.Body>
        <Card.Title as="h2">Pros</Card.Title>
        {pros.length > 0 ? (
          <>
            <ul aria-label="List of pros">
              {displayedPros.map((pro, index) => (
                <li key={`pro-${index}`} className={`text-${textColor}`}>{pro}</li>
              ))}
            </ul>
            {pros.length > maxInitialDisplay && (
              <Button 
                variant="outline-success" 
                size="sm" 
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less' : `Show ${pros.length - maxInitialDisplay} More`}
              </Button>
            )}
          </>
        ) : (
          <p>No pros to display.</p>
        )}
      </Card.Body>
    </Card>
  );
}

Pros.propTypes = {
  pros: PropTypes.arrayOf(PropTypes.string).isRequired,
  maxInitialDisplay: PropTypes.number,
  textColor: PropTypes.string,
};

Pros.defaultProps = {
  pros: [],
  maxInitialDisplay: 5,
  textColor: 'success',
};

export default Pros;