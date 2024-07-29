import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import DonutChart from './Components/DonutSentimentChart';
import StockData from './Components/StockData';
import StockSearch from './Components/StockSearch';
import Pros from './Components/Pros';
import Cons from './Components/Cons';
import './styles.css';

function App() {
  const [pros, setPros] = useState([]);
  const [cons, setCons] = useState([]);
  const [stockData, setStockData] = useState({
    name: "",
    symbol: "",
    price: 0,
    keyPoints: []
  });

  const handleSearch = (data) => {
    setStockData({
      name: data.name,
      symbol: data.symbol,
      price: data.price,
      keyPoints: data.keyPoints
    });
    setPros(data.sentiment.pros);
    setCons(data.sentiment.cons);
  };

  return (
    <div className="App">
      <NavBar />
      <Container fluid>
        
        {/* Search Bar Section */}
        <section className="section search-bar-section">
          <Card className="shadow-box">
            <Card.Body>
              <StockSearch onSearch={handleSearch} />
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
              </Card>
            </Col>
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
