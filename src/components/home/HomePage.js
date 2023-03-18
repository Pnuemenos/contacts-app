import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col xs={4} sm={6}>
          <Image src="/img/Picture2.png" fluid />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">HRClarity.Ai</h1>
          <p className="mt-4">
            Lorem Ipsum
            <br />
            <br />
            Some random text
          </p>
          <Button variant="outline-primary">Get Started &gt;&gt;</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
