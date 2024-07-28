import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './components/NavBar';
import AvailableDataChart from './components/AvailableDataChart';
import AssignedDataChart from './components/AssignedDataChart';
import DataCard from './components/DataCard';
import Pros from './components/Pros';
import Cons from './components/Cons';
import './styles.css';

function App() {
  const pros = [
    "High growth potential",
    "Strong financials",
    "Innovative products"
  ];

  const cons = [
    "High valuation",
    "Market volatility",
    "Regulatory risks"
  ];

  return (
    <div className="App">
      <NavBar />
      <Container fluid>
        
        {/* Data Cards Section */}
        <section className="section data-cards-section">
          <Card className="shadow-box">
            <Card.Body>
              <Row>
                <Col><DataCard title="Number of Annotators" value={23} /></Col>
                <Col><DataCard title="Number of Linguistics" value={43} /></Col>
                <Col><DataCard title="Number of Groups" value={43} /></Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
        
        {/* Data Charts Section */}
        <section className="section data-charts-section">
          <Row>
            <Col><AvailableDataChart /></Col>
            <Col><AssignedDataChart /></Col>
          </Row>
        </section>
        
        {/* Pros and Cons Section */}
        <section className="section pros-cons-section">
          <Card className="shadow-box">
            <Card.Body>
              <Row>
                <Col><Pros pros={pros} /></Col>
                <Col><Cons cons={cons} /></Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
        
      </Container>
    </div>
  );
}

export default App;
