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
  const [verdict, setVerdict] = useState("");

  const getVerdictClass = (verdict) => {
    switch (verdict) {
      case 'Buy':
        return 'verdict-buy';
      case 'Sell':
        return 'verdict-sell';
      case 'Hold':
        return 'verdict-hold';
      default:
        return '';
    }
  };

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

      // Determine the verdict
      const { positive, neutral, negative } = sentimentData.confidenceScores;
      if (positive > neutral + negative) {
        setVerdict("Buy");
      } else if (negative > positive + neutral) {
        setVerdict("Sell");
      } else {
        setVerdict("Hold");
      }
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      setVerdict("Error in analysis");
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
            <Col md={4}>
              <DonutSentimentChart sentimentScores={sentimentScores} />
              <div className={`verdict ${getVerdictClass(verdict)}`}>
                <h3>Verdict: {verdict}</h3>
              </div>
            </Col>
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
