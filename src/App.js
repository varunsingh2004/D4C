import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import DonutChart from './Components/DonutSentimentChart';
import AssignedDataChart from './Components/AssignedDataChart';
import DataCard from './Components/DataCard';
import Pros from './Components/Pros';
import Cons from './Components/Cons';
import StockData from './Components/StockData';

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

  const stockData = {
    name: "Company XYZ",
    symbol: "XYZ",
    price: 123.45,
    keyPoints: [
      "Leading market position",
      "Diversified product portfolio",
      "Strong R&D capabilities"
    ]
  };

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
            <Col md={4}><DonutChart /></Col>
            <Col md={7}>
            <Card className="shadow-box">
                <Card.Body>
                  <StockData
                    name={stockData.name}
                    symbol={stockData.symbol}
                    price={stockData.price}
                    keyPoints={stockData.keyPoints}
                  />
                </Card.Body>
              </Card></Col>
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
