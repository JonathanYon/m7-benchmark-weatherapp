import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Search from "./components/searchPage/Search";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/elegant-cloud-background-blue-sky-design_1017-25503.jpg?size=626&ext=jpg)`,
      }}
    >
      <Container>
        {/* <Row> */}
        <Search />
        {/* </Row> */}
        <Row>
          <Col sm={6}>hi</Col>
          <Col sm={6}>hello</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
