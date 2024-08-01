import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import StockData from './Components/StockData';
import StockSearch from './Components/StockSearch';
import './styles.css';
import DonutSentimentChart from './Components/DonutSentimentChart';
import Financials from './Components/Financials';
import analyzeSentiment from './sentimentService';

function App() {
  const [sentimentScores, setSentimentScores] = useState({
    positive: 0,
    neutral: 1,
    negative: 0
  });
  const [stockData, setStockData] = useState({
    name: "",
    symbol: "",
    price: 0,
    description: "",
    analysis: ""
  });

  const handleSearch = async (data) => {
    setStockData({
      name: data.name,
      symbol: data.symbol,
      price: data.price,
      description: data.description,
      analysis: data.analysis
    });
  
    try {
      const sentimentData = await analyzeSentiment(data.description);
      setSentimentScores(sentimentData.confidenceScores);
      
      console.log('Sentiment:', sentimentData.sentiment);
      console.log('Scores:', sentimentData.confidenceScores);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
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
            <Col md={4}><DonutSentimentChart sentimentScores={sentimentScores} /></Col>
            <Col md={7}>
              <Card className="shadow-box">
                <Card.Body>
                  <StockData
                    name={stockData.name}
                    symbol={stockData.symbol}
                    price={stockData.price}
                    description={stockData.description}
                  />
                  <p>{stockData.analysis}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        
        {/* Financials Section */}
        <section className="section financials-section">
          <Card className="shadow-box">
            <Card.Body>
              <Financials stockSymbol={stockData.symbol} />
            </Card.Body>
          </Card>
        </section>
        
      </Container>
    </div>
  );
}

export default App;
