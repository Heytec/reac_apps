import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';

import Stack from 'react-bootstrap/Stack';
import Header from './header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import FormChannel from './FormChannel';
import DispalyAdd from './DisplayAdd';

function App() {

  const [items ,setItems] =useState([]);

  return (
    <Container fluid className="App">

      <Header />  
      <Stack direction="horizontal">
      <Sidebar/>

      <Container>
     <Row className='mt-5'>
      <Col>
      <FormChannel  setItems={setItems}  />
      </Col>
     <Col>
      <DispalyAdd items={items} />
      </Col>
      </Row>
      </Container>


      </Stack>

      </Container>
  );
}

export default App;
