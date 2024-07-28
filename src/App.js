import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from './components/NavBar';
import AvailableDataChart from './components/AvailableDataChart';
import AssignedDataChart from './components/AssignedDataChart';
import AnnotatedDataChart from './components/AnnotatedDataChart';
import UnannotatedDataChart from './components/UnannotatedDataChart';
import DataCard from './components/DataCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid>
        <Row>
          <Col><DataCard title="Number of Annotators" value={23} /></Col>
          <Col><DataCard title="Number of Linguistics" value={43} /></Col>
          <Col><DataCard title="Number of Groups" value={43} /></Col>
        </Row>
        <Row>
          <Col><AvailableDataChart /></Col>
          <Col><AssignedDataChart /></Col>
        </Row>
        <Row>
          <Col><AnnotatedDataChart /></Col>
          <Col><UnannotatedDataChart /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
